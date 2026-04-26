import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Resolve the path to the leads data file in the project root
const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

/**
 * Reads existing leads from the JSON file.
 * Returns an empty array if the file doesn't exist yet.
 */
function readLeads(): Array<Record<string, unknown>> {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading leads file:', err);
  }
  return [];
}

/**
 * Writes the full leads array to the JSON file.
 * Creates the `data/` directory if it doesn't exist.
 */
function writeLeads(leads: Array<Record<string, unknown>>): void {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const blockedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
    const email = String(body.email ?? '').trim().toLowerCase();
    const emailDomain = email.split('@')[1] ?? '';
    const phone = String(body.phone ?? '').replace(/\D/g, '');
    
    // Honeypot spam trap: respond as success silently.
    if (String(body.companyWebsite ?? '').trim()) {
      return NextResponse.json({ success: true, message: 'Lead captured successfully' }, { status: 201 });
    }

    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (blockedDomains.includes(emailDomain)) {
      return NextResponse.json(
        { success: false, error: 'Please use a work email address' },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: 'Phone number must be exactly 10 digits' },
        { status: 400 }
      );
    }

    const leadId = `LD-${Date.now()}`;
    const leadEntry = {
      leadId,
      timestamp: new Date().toISOString(),
      source: 'Accredian Enterprise Landing Page',
      data: {
        ...body,
        email,
        phone,
      },
    };

    // Console log for terminal visibility
    console.log('New Lead Submitted:', leadEntry);

    // Persist to JSON file
    const leads = readLeads();
    leads.push(leadEntry);
    writeLeads(leads);

    console.log(`Lead saved to ${LEADS_FILE}  (Total: ${leads.length})`);

    // Detailed success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        leadId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

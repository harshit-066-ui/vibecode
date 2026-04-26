import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Simulate server processing
    console.log('Received Lead:', data);
    
    // In a real app, you would send this to a CRM or DB here.
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your enquiry! Our advisor will contact you shortly.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process request. Please try again.' 
    }, { status: 400 });
  }
}

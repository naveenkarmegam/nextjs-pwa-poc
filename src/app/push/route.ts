import { NextRequest, NextResponse } from "next/server";
import webpush from 'web-push'



webpush.setVapidDetails(
    'mailto:naveenkkn03@gmail.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  )

  
export async function POST(req:NextRequest) {
    try {
        
        const data = await req.json()
console.log(data.sub)
        await webpush.sendNotification(
            data.sub,
            JSON.stringify({
              title: 'Test Notification',
              body: "sucess",
              icon: '/icon.png',
            })
          )
          return NextResponse.json({ success: true }) 
    } catch (error) {
        console.log(error)
    }
}
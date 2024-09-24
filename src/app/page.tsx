import { InstallPrompt } from "./InstallPrompt"
import { PushNotificationManager } from "./PushNotificationMananger"


 
export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}
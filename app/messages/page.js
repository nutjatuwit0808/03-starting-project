import { unstable_noStore } from "next/cache";
import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// **reserve name in nextjs**
// export const revalidate = 5;
// export const dynamic = 'force-dynamic' //when production it's will be build as dynamic. It's mean no caching

export default async function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     revalidate: 5 //reuse it in 5 second
  //   }
  // });
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}

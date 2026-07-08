import { getNavigationData } from "@/lib/sanity/navigation/service";
import { ClientHeader } from "./ClientHeader";

export async function Header() {
  const navigationData = await getNavigationData();
  
  return <ClientHeader navigationData={navigationData} />;
}

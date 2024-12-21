import { HomeForm } from "@/ui/forms";
import { HomeBody, TitleBody } from "./style";

export function HomeComp() {
  return (
    <HomeBody>
      <TitleBody>
        <div>El Mejor</div>
        <div>E-Commerce</div>
      </TitleBody>
      <HomeForm />
    </HomeBody>
  );
}

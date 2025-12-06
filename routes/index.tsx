import { define } from "../utils.ts";
import Portfolio from "../components/Portfolio.tsx";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-white">
      <Portfolio />
    </div>
  );
});

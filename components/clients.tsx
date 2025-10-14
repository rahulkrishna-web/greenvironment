import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos";
import { Button } from "./ui/button";

const Clients = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div>
        <p className="text-center text-xl">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-lg)">
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
          <Logo05 />
          <Logo06 />
          <Logo07 />
          <Logo08 />
        </div>
        <p className="mt-20 text-center text-xl">
          You can be our next sponsor.
        </p>
        <div className="mt-2 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
          <Button size="lg" variant="outline">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Clients;

import ComingSoon from "@/components/atoms/journey/step/comingSoon";
import SMA from "@/components/atoms/journey/step/sma";
import SMP from "@/components/atoms/journey/step/smp";

const Steps = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div>
        <ComingSoon />
        <SMA />
      </div>
    </div>
  );
};

export default Steps;

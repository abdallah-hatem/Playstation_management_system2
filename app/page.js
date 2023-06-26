// "use client";

import StopWatch from "../components/StopWatch";
import "./style.scss";
import StopWatch2 from "../components/StopWatch2";

import getDevices from "../lib/getDevices";

export default async function Home() {
  const data = await getDevices();

  function render() {
    return data?.map((el, index) => (
      <StopWatch2
        title={el.name}
        id={index}
        type={el.devicetype.name}
        hourRate={el.devicetype.hourRate}
        key={index}
      />
    ));
  }

  return <div className="devices-cont">{render()}</div>;
}

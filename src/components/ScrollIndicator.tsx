import { useState, useEffect } from "react";
export default function ScrollIndicator() {

  const [sektion, activeSektion] = useState("hero");

  const sektioner = ["hero", "about", "projects", "skills", "utbildningar"];
  useEffect(() => {

    function handleScroll() {
      let nearest = null;
      let minDistance = Infinity;

      sektioner.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight * 0.3);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = id;
        }
      });
      if (nearest) activeSektion(nearest);
      console.log(nearest, minDistance);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="fixed flex flex-col gap-8 right-4 top-1/2 -translate-y-1/2">
      {sektioner.map((id) => {
        return <div
          key={id}
          className={sektion === id ? "h-px w-8 bg-orange-300" : "h-px w-4 bg-orange-300"}
        />;
      })}
    </div>
  );
}

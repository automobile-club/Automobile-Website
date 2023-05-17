import { useEffect } from "react";
import styles from "./DirectionCards.module.css";

function updateElement(ev: MouseEvent, element: HTMLElement) {
  const directions: Record<number, string> = {
    0: "top",
    1: "right",
    2: "bottom",
    3: "left",
  };
  const classNames: string[] = ["in", "out"]
    .map((p) => Object.values(directions).map((d) => styles[`${p}_${d}`]))
    .reduce((a, b) => a.concat(b));

  const getDirectionKey = (ev: MouseEvent, node: HTMLElement) => {
    const { width, height, top, left } = node.getBoundingClientRect();
    const l = ev.pageX - (left + window.pageXOffset);
    const t = ev.pageY - (top + window.pageYOffset);
    const x = l - (width / 2) * (width > height ? height / width : 1);
    const y = t - (height / 2) * (height > width ? width / height : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  element.classList.remove(...classNames);
  element.classList.add(
    styles[
      `${ev.type === "mouseover" ? "in" : "out"}_${
        directions[getDirectionKey(ev, element)]
      }`
    ]
  );
}

function DirectionCards(): JSX.Element {
  useEffect(() => {
    const nodes: NodeListOf<HTMLElement> = document.querySelectorAll("li");

    nodes.forEach((node) => {
      node.addEventListener("mouseover", (ev) => updateElement(ev, node));
      node.addEventListener("mouseout", (ev) => updateElement(ev, node));
    });
  }, []);

  return (
    <ul className={styles.listContainer}>
      <li className={styles.list}>
        <div className={styles.info}>
          <h3>Single-origin coffee whatever</h3>
          <p>
            Williamsburg tofu polaroid, 90s Bushwick irony locavore ethnic meh
            messenger bag Truffaut jean shorts.
          </p>
        </div>
      </li>
      <li className={styles.list}>
        <div className={styles.info}>
          <h3>Single-origin coffee whatever</h3>
          <p>
            Williamsburg tofu polaroid, 90s Bushwick irony locavore ethnic meh
            messenger bag Truffaut jean shorts.
          </p>
        </div>
      </li>
      <li className={styles.list}>
        <div className={styles.info}>
          <h3>Single-origin coffee whatever</h3>
          <p>
            Williamsburg tofu polaroid, 90s Bushwick irony locavore ethnic meh
            messenger bag Truffaut jean shorts.
          </p>
        </div>
      </li>
      <li className={styles.list}>
        <div className={styles.info}>
          <h3>Single-origin coffee whatever</h3>
          <p>
            Williamsburg tofu polaroid, 90s Bushwick irony locavore ethnic meh
            messenger bag Truffaut jean shorts.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default DirectionCards;

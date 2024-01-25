import { Chrono } from "react-chrono";

const items = [
  {    
    media: {
      name: " IIT Bombay",
      source: {
        url: "/images/tiimelineim.png"
      },
      type: "IMAGE"
    },
    title: "2018",
    cardTitle: "IIT Bombay",
    cardSubtitle: "Top 10 in IFT'18 Techfest'18",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    media: {
      name: " IIT Guwahati",
      source: {
        url: "/images/tiimelineim.png"
      },
      type: "IMAGE"
    },
    title: "2019",
    cardTitle: "IIT Guwahati",
    cardSubtitle: "2nd Position Burnout'18 Techniche'19",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    media: {
      name: " IIT Varanasi",
      source: {
        url: "/images/tiimelineim.png"
      },
      type: "IMAGE"
    },
    title: "2019",
    cardTitle: "IIT Varanasi",
    cardSubtitle: "1st Position Axelerate'19 Technex'19",
    cardDetailedText: "This is the third event on the timeline.",
  }];

const AchievementTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
    />
  );
}

<div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
              alt="twitter"
            />
            </div>;

export default AchievementTimeline;
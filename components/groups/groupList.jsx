"use client";
import React from "react";
import GroupCard from "./groupCard";

export default function GroupList() {
  const groups = [
    {
      title: "Late Night Thoughts",
      members: "12 active",
      desc: "A space for open-ended conversations after dark.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYg8SA9gAnCxdxCId863m1D8NPhyXRrqpaXm1hkhjV6Dut2zGfQwA2KUltB841ooL_WcN65QftRcbnWues6D1Id_IFDQ9gzXYA074nBM800KP4jhUTGzf0G7JqHmgROjOm1Ayg0-eIMOGsLK-iTuI66rnz6ZTrfzI0MaezqwObEZQioIqqy2hJCWoGuFhaGvgAf9Wo02AWrcFldtpRK8-ewu_cv_OH7LDUwGTM2NqOYW0FgLZ9qldlT7HLpj9ISyqGSvsj1-PDPshK",
    },
    {
      title: "Book Club Readers",
      members: "5 online",
      desc: "Discussing this month's featured novel.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXoSeryRRLrjOlehEDBHKuXwcH1e0KDrG8XCQsvuYCuW1ZaOSPagfUSqm5vseu4Qb058RCPS3HfJ_kT73gY8iW_9zG0kNQ14hXMl6b6_09BSXiJsmk6ZkLmTExe2WihrezV-gTYF4U1ox79uGOrpFrSc7xC2ss0zgGUA48hQLIxVYgblzW3dVKHV5BBf02ua3wNgRFzKZUKWok72flMZxyhkw1s6L7AXCC-PYTWITphV6qSsuVlWZk72nbnpgpI2OjmpRVbDcqckaP",
    },
    {
      title: "Video Game Enthusiasts",
      members: "28 active",
      desc: "Connecting with fellow gamers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM3ffahnZLOgVdDxty6dWb0JNm7MBRCXqDo1ou3iM0sI5DJfiwtwzkydTwkFNZLWpUQ0uzYRUfqRcuoIVj9VI_N6139ckYAp6sq2y-Qhv86IyXljVpOrgKAy-reOB4qJuR5fpq33x5sqPn9z-p9ZbRlLA_IqFg9TeDaUMOds2uRMl-UhsmQPZG_ydg1NhTr1fhq9vg72BCt2lDPEPN8uhe-iFwRtsIYg5AoGNxAffna-epgryWkPzi4f8accvEq6pPllR2FN5NrSZ4",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {groups.map((group, i) => (
        <GroupCard key={i} {...group} />
      ))}
    </div>
  );
}

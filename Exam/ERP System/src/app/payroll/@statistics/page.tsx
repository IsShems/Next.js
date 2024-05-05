// 'use client'
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
// import style from '../@statistics/@statistics.module.css'
// import { data } from '@/data/data';
// import { followersData } from '@/data/followersData';


// export default function Statistics() {
//   return (
//     <div className={style.container}>
//      <ResponsiveContainer width="40%" aspect={800 / 400}>
//         <BarChart
//           width={800}
//           height={400}
//           data={followersData}
//           margin={{
//             top: 10,
//             bottom: 5,
//           }}
//         >
//           <Tooltip />
//           <Bar
//             dataKey="followers"
//             fill="#DAD7FE"
//             radius={[10, 10, 10, 10]}
//             barSize={10}
//             activeBar={<Rectangle fill="#4339F2" />}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };


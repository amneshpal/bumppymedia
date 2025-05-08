// import React from 'react';
// // import './FeatureCard.css';
// import image12 from '../assets/image12.svg';
// import image13 from '../assets/image13.svg';
// import image14 from '../assets/image14.svg';
// // import './Responsiv.css';

// const features = [
//   {
//     title: 'Max ITC',
//     desc: 'Increase Accuracy, Efficiency, Productivity',
//     image: image12
//   },
//   {
//     title: 'Enterprise',
//     desc: 'GST, E-Invoicing, Secretarial compliance & more',
//     image: image13
//   },
//   {
//     title: 'Calculate Tax Liability',
//     desc: 'Know your tax liability as per latest budget 2025 updates.',
//     image: image14
//   }
// ];

// const FeatureCards = () => {
//   return (
//     <div id="card-background" className="mx-auto" style={{ maxWidth: '1207px', height: '303px', marginLeft: '70px', marginRight: '70px' }}>

//       <div className="container my-5">
//         <div className="row">
//           {features.map((item, index) => (
//             <div key={index} className="col-md-4 mb-4">
//               <div className="card h-100 shadow-sm text-start">
//                 <img src={item.image} className="card-img-top p-3 float-start" alt={item.title} style={{ height: '82px', width: '82px' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;





// import React from 'react';
// import './FeatureCard.css';
// import image12 from '../assets/image12.svg';
// import image13 from '../assets/image13.svg';
// import image14 from '../assets/image14.svg';
// import './Responsiv.css';

// const features = [
//   {
//     title: 'Max ITC',
//     desc: 'Increase Accuracy, Efficiency, Productivity',
//     image: image12
//   },
//   {
//     title: 'Enterprise',
//     desc: 'GST, E-Invoicing, Secretarial compliance & more',
//     image: image13
//   },
//   {
//     title: 'Calculate Tax Liability',
//     desc: 'Know your tax liability as per latest budget 2025 updates.',
//     image: image14
//   }
// ];

// const FeatureCards = () => {
//   return (
//     <div id="card-background" style={{ marginLeft: "100px", marginRight: "100px" }}>
//       <div className="container my-5">
//         <div className="row">
//           {features.map((item, index) => (
//             <div key={index} className="col-md-4 mb-4">
//               <div className="card h-100 shadow-sm text-start">
//                 <img src={item.image} className="card-img-top p-3 float-start" alt={item.title} style={{ height: '82px', width: '82px' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;



import React from 'react';
import './FeatureCard.css';
import image12 from '../assets/image12.svg';
import image13 from '../assets/image13.svg';
import image14 from '../assets/image14.svg';
import './Responsiv.css';

const features = [
  {
    title: 'Max ITC',
    desc: 'Increase Accuracy, Efficiency, Productivity',
    image: image12
  },
  {
    title: 'Enterprise',
    desc: 'GST, E-Invoicing, Secretarial compliance & more',
    image: image13
  },
  {
    title: 'Calculate Tax Liability',
    desc: 'Know your tax liability as per latest budget 2025 updates.',
    image: image14
  }
];

const FeatureCards = () => {
  return (
    <div id="card-background" className="mx-auto" style={{ marginLeft: "15px", marginRight: "15px" }}>
      <div className="container my-5">
        <div className="row">
          {features.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-start">
                <img src={item.image} className="card-img-top p-3 float-start" alt={item.title} style={{ height: '82px', width: '82px' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;

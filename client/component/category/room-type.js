import React from 'react';
import { MdOutlineBedroomParent } from 'react-icons/md';

export default function RoomType() {
  const roomTypes = [
    { type: 'A Bed in a Single Room', beds: 1 },
    { type: 'A Bed in a Shared Double Room', beds: 2 },
    { type: 'A Bed in a Shared Triple Room', beds: 3 },
    { type: 'A Bed in a Shared Quadruple Room', beds: 4 }
  ];

  return (
    <>
      <section className='mt-4'>
        <div className='container-fluid'>
          <p className='fs18 mfs-14 mlnh27  lnh33 ls05 drk-clr'>
            Due to the high demand for accommodations in Makkah and Madinah during the Hajj season, accommodation services may differ from other times of the year. Some service providers may offer single rooms. However, the majority of rooms will be offered on a sharing basis. Packages will include a single bed in a shared room, which may vary between double, triple, or quadruple rooms. Service providers will make an effort to accommodate rooming preferences to the best of their ability. However, it should be noted that the selection of roommates is not guaranteed.
          </p>

          <div className='row mt-3 text-center'>
            {roomTypes.map((room, index) => (
              <div key={index} className='col-12 col-md-6 col-lg-3 mb-3'>
                {/* Render icons dynamically based on the number of beds */}
                {Array.from({ length: room.beds }).map((_, i) => (
                  <MdOutlineBedroomParent key={i} size={34} className='drk-clr'/>
                ))}
                <p className='fs-16 mfs-14  mt-2 cb fwb'>{room.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Guidance = ({timelineItems}) => {


    return (
        <>
            <div className="timeline-container row">
                    <div className='col-lg-12 col-md-12 col-sm-12 '>
                <VerticalTimeline>
                    {timelineItems.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--hajj"
                            contentStyle={{ background: '#fff', color: '#333',}}
                            contentArrowStyle={{ borderRight: '7px solid #fff' }}
                            date={<span className='green-clr fwb fs24 mfs-19 ' style={{ color: '' }}>{item.date}</span>}
                        >
                            <h2 className="vertical-timeline-element-date " style={{textAlign:'justify',color:"#6D6D6D",}}>{item.cnt}</h2>
                            <img src={item.imageUrl} alt={item.title} style={{ width: '100%', borderRadius: '5px' }} />
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
                </div>
            </div>
            <style jsx>
                {`
                .timeline-container {
                    display: flex;
                    justify-content: center; /* Center the timeline horizontally */
                    align-items: flex-start; /* Align items to the start vertically */
                    padding: 20px; /* Add some padding around the timeline */
                    background-color: #f5f5f5; /* Optional: Set a background color */
                }

                .vertical-timeline-element-date {
                    text-align: center;
                    font-size: 1.5rem; /* Adjust size as needed */
                    margin: 60px 0;
                    line-height: 27px;
                }

                .vertical-timeline-element-title {
                    text-align: center;
                    margin: 10px 0;
                }

                .vertical-timeline-element-subtitle {
                    text-align: center;
                    margin: 5px 0;
                }

                .vertical-timeline-element--hajj {
                    margin-bottom: 20px;
                }
                `}
            </style>
        </>
    );
};

export default Guidance;

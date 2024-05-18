import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { useTheme } from 'next-themes';

const ExperienceCard = ({ experience }) => {
    const { theme } = useTheme();

    const contentStyle = theme === 'dark' ? {
        background: '#4f4f4f',
        color: '#eaeaec',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 10px 15px -3px, rgba(255, 255, 255, 0.05) 0px 4px 6px -2px',
    } : {
        background: '#eaeaec', 
        color: '#292929',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    };

    return (
        <VerticalTimelineElement
            contentStyle={contentStyle}
            contentArrowStyle={{
                borderRight: '7px solid  #232631',
            }}
            date={
                <div>
                    <h3 className="text-dim text-[18px] font-bold font-beckman">
                        {experience.date}
                    </h3>
                </div>
            }
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.logo} alt="Company Logo" />
                </div>
            }
        >
            <div>
                <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
                    {experience.title}
                </h3>
                <p
                    className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = ({ experiences }) => {
    const { theme } = useTheme();

    const lineColor = theme === 'dark' ? {
        background: '#292929',
        color: '#eaeaec',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 10px 15px -3px, rgba(255, 255, 255, 0.05) 0px 4px 6px -2px',
    } : {
        background: '#eaeaec',
        color: '#292929',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    };

    return (
        <>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline className="vertical-timeline-custom-line" lineColor={theme === "dark" ? "pink" : "violet"} >
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Experience;
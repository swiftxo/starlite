import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';
const CustomDate = styled.span.attrs({
  className: 'text-transparent bg-clip-text bg-custom-gradient font-bold text-xl', // Tailwind classes
})``;


const ExperienceTimeline = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

<section className="mt-32">
<h2 className="text-center text-6xl font-bold text-white mt-4 mb-8 md:mb-12 ">My Experience</h2>

  <VerticalTimeline lineColor="#2f374b">
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#5E6E97', color: 'text-white' }}
      contentArrowStyle={{ borderRight: '7px solid  #5E6E97' }}
      date={<CustomDate>Apr 2023- present</CustomDate>}
  
  
  
      visible = {true}
      iconStyle={{ backgroundImage: 'url(/images/Experiences/WLU.jpeg)', backgroundSize: 'cover'  }} >
      <h1 className="vertical-timeline-element-title  font-semibold text-2xl">Residence Education Advisor</h1>
      <h4 className="vertical-timeline-element-subtitle font-medium">Wilfrid Laurier University | Waterloo, ON</h4>
    <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
      <li>Actively assessed and addressed developmental needs for 200+ first-year residents.</li>
  
      <li>Collaborated in a 12-person team to create promotional materials for  3000+ students.</li>
  
      <li>Organized bi-weekly events, significantly improving student engagement and personal growth.</li>
    </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle = {{ background: '#56658A', color: '#fff'  }}
      contentArrowStyle={{ borderRight:'7px solid  #56658A' }}
  
      date={<CustomDate>Sep 2023 - Present</CustomDate>}
      visible = {true}
      iconStyle={{ backgroundImage: 'url(/images/Experiences/WLU.jpeg)', backgroundSize: 'cover'  }} >
      <h3 className="vertical-timeline-element-title font-semibold text-2xl">Divisional Council Member </h3>
      <h4 className="vertical-timeline-element-subtitle font-medium">Wilfrid Laurier University | Waterloo, ON</h4>
      <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
      <li>Represented students in discussions with faculty, providing valuable insights on curriculum changes.</li>
      <li>Contributed to decision-making processes, enhancing the academic experience for peers.</li>
     </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date= {<CustomDate>Sep 2022 - Present</CustomDate>}
      visible = {true}
      contentStyle = {{ background: '#4F5C7D'}}
      contentArrowStyle={{ borderRight:'7px solid  #4F5C7D' }}
  
      iconStyle={{ backgroundImage: 'url(/images/Experiences/LCS.png)', backgroundSize: 'cover'  }} >
      <h3 className="vertical-timeline-element-title font-semibold text-2xl">Events Coordinator</h3>
      <h4 className="vertical-timeline-element-subtitle font-medium">Laurier Computing Society | Waterloo, ON</h4>
      <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
      <li>Coordinated and assisted in planning over 20 events, engaging a community of 3000+ members.</li>
      <li>Organized workshops, hackathons, and networking sessions, aligning with student interests and objectives.</li>
     </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={<CustomDate>Sep 2023 - Present</CustomDate>}
      visible = {true}
      contentStyle = {{background:'#475371'  }}
      contentArrowStyle={{ borderRight:'7px solid  #475371' }}
  
      iconStyle={{ backgroundImage: 'url(/images/Experiences/LaurierGrappling.png)', backgroundSize: 'cover'  }} >
      <h3 className="vertical-timeline-element-title font-semibold text-2xl">Director Of Marketing</h3>
      <h4 className="vertical-timeline-element-subtitle font-medium">Laurier Grappling | Waterloo, ON</h4>
      <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
          <li>Developed comprehensive marketing strategies, significantly enhancing the club’s visibility.</li>
          <li>Utilized various marketing channels, attracting new members and increasing engagement.</li>
          <li>Coordinated a 4-person team to execute marketing strategies, achieving measurable success.</li>
      </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={<CustomDate>Feb 2024 - Present</CustomDate>}
      visible = {true}
      contentStyle = {{background: '#3F4964'}}
      contentArrowStyle={{ borderRight:'7px solid  #3F4964' }}
  
      iconStyle={{ backgroundImage: 'url(/images/Experiences/BSA.png)', backgroundSize: 'cover'  }} >
      <h3 className="vertical-timeline-element-title font-semibold text-2xl ">Vice President</h3>
      <h4 className="vertical-timeline-element-subtitle font-medium">Bangladeshi Students Association | Waterloo, ON</h4>
      <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
          <li>Oversee all club operations & departments, providing support and insights.</li>
          <li>Manage and adjust club budget for student events.</li>
      </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={<CustomDate>Oct 2023 - Apr 2024</CustomDate>}
      visible = {true}
      contentStyle = {{background:'#374058'
      }}
      contentArrowStyle={{ borderRight:'7px solid  #374058' }}
  
      iconStyle={{ backgroundImage: 'url(/images/Experiences/LBO.jpg)', backgroundSize: 'cover'  }} >
      <h3 className="vertical-timeline-element-title text-2xl font-semibold">Director Of Events</h3>
      <h4 className="vertical-timeline-element-subtitle font-medium">Laurier Biotechnology Organization | Waterloo, ON</h4>
      <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
          <li>Led the planning and execution of diverse events.</li>
          <li>Manage and adjust all budgets/finances for  events.</li>
          <li>In constant communications with internal and external affiliates for event management.</li>
      </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={<CustomDate>Jun 2021 - Sep 2021</CustomDate>}
      iconStyle={{ backgroundImage: 'url(/images/Experiences/TDSB.png)', backgroundSize: 'cover'  }}
      visible = {true}
      contentStyle ={{background: '#2f374b'   }}
      contentArrowStyle={{ borderRight:'7px solid  #2f374b' }}
  
      >
      <h3 className="vertical-timeline-element-title text-2xl font-semibold">Permits Information Technician</h3>
      <h4 className="vertical-timeline-element-subtitle font-medium">Toronto District School Board | Toronto, ON</h4>
    <ul className=" mt-3 space-y-2 px-3 list-outside list-disc">
          <li>Collected and verified data on 50+ attributes for 125+ schools, ensuring regulatory compliance.</li>
          <li>Organized and managed data using Excel, enhancing efficiency in tracking and analysis.</li>
          <li>Collaborated  with a 4-person team to resolve data discrepancies, improving data integrity and accuracy.</li>
      </ul>
    </VerticalTimelineElement>
  
    <VerticalTimelineElement
      iconStyle={{ background: 'linear-gradient(90deg, hsla(207, 27%, 44%, 1) 0%, hsla(230, 33%, 47%, 1) 100%)' , color: '#fff' }}
      icon={<ChevronDoubleUpIcon  className="text-slate-300 hover:text-white cursor-pointer"/>}
      visible = {true}
      iconOnClick={scrollToTop}
    />
  </VerticalTimeline >
</section>
  )
}

export default ExperienceTimeline
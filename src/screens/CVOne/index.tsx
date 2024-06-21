import React from 'react';
import { CVOneType } from './models';



const CV: React.FC<CVOneType> = ({
  data,
  backgroundColor = 'F1E5D1',
  backgroundLeft = 'FCF5ED',
  nameColor = '000',
  watermark,
  fontSize = 31
}) => {

  const generateHeaderLeftSide = (text: string) => {
    return (
      <h2 className='text-xl border-b-2 border-[#BBAB8C] mb-3 pb-1'>{text}</h2>
    )
  }
  const generateHeaderRightSide = (text: string) => {
    return (
      <h2 className='text-2xl border-b-2 border-[#BBAB8C] mb-5 pb-1'>{text}</h2>
    )
  }

  return (
    <div className='relative'>
      {watermark && (
        <p
          className='text-gray-600 font-bold uppercase text-[100px] text-center absolute rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 break-words'>
          {watermark}
        </p>
      )}
      {data?.firstName ? (
        <div className={`p-8`} style={{ backgroundColor: `#${backgroundColor}` }}>
          <h1
            className={`font-bold border-[2px] border-[#FCF5ED] text-center py-8`}
            style={{ color: `#${nameColor}`, fontSize: `${fontSize}px` }}
          >
            {data.firstName} {data.lastName}
          </h1>
          <div className='flex mt-5'>
            <div className={`w-1/4 px-6 py-4`} style={{ backgroundColor: `#${backgroundLeft}` }}>
              <div id='contact' className='mb-4'>
                {generateHeaderLeftSide('Contact')}
                <p className='text-sm'>Email:</p>
                <p className='break-words'>{data.email}</p>
                <p className='text-sm'>Phone:</p>
                <p>{data.phoneNumber}</p>
                <p className='text-sm'>Address:</p>
                <p> {data.address}</p>
                {data.linkedin ? (<a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>) : null}
              </div>

              <div id="skills" className='mb-4'>
                {generateHeaderLeftSide('Skills')}
                <ul>
                  {data.skills.map((skill, index) => (
                    <li key={index}>
                      <p>{skill.name}: {skill.score}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='w-3/4 py-4 px-8'>
              <div id="description" className='mb-4'>
                {generateHeaderRightSide('Description')}
                <p>{data.description}</p>
              </div>
              <div id='certifications' className='mb-4'>
                {generateHeaderRightSide('Certifications')}
                <ul>
                  {data.certifications.map((cert, index) => (
                    <li key={index}>
                      <p>{cert.name} - {cert.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="educations" className='mb-4'>
                {generateHeaderRightSide('Education')}
                <ul>
                  {data.education.map((edu, index) => (
                    <li key={index}>
                      <h3>{edu.degree} in {edu.major}</h3>
                      <p>{edu.university || edu.school}</p>
                      <p>{edu.location}</p>
                      <p>{edu.startDate} - {edu.endDate}</p>
                      <p>{edu.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="experiences" className='mb-4'>
                {generateHeaderRightSide('Experiences')}
                <ul>
                  {data.experiences.map((experience, index) => (
                    <li key={index}>
                      <h3>{experience.title} at {experience.company}</h3>
                      <p>{experience.location}</p>
                      <p>{experience.startDate} - {experience.endDate}</p>
                      <p>{experience.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>



          </div>

        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CV;

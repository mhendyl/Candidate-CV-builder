// CandidateForm.tsx
import React, { useEffect, useState } from 'react';
import { CandidateData, Experience, Education, Certification, Skill } from '../../../../utils/models/models';
import FormDetailsCandidate from '../candidateDetails';
import CandidateExperiences from '../candidateExperience';
import CandidateEducational from '../candidateEducation';
import CandidateCertificateForm from '../candidateCertificate';
import CandidateSkillsForm from '../candidateSkills';
import { defaultValue } from './defaultValue';
import { fetchData } from '../../../../utils/helper';
import { useParams } from 'react-router-dom';

const CandidateForm: React.FC = () => {
  const [candidateData, setCandidateData] = useState<CandidateData>(defaultValue);
  let { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      if (id) {
        setCandidateData(data[Number(id)]);
      }
    };

    loadData();
  }, [id]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCandidateData({ ...candidateData, [name]: value });
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newExperiences = [...candidateData.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: e.target.value };
    setCandidateData({ ...candidateData, experiences: newExperiences });
  };

  const handleEducationChange = (
    index: number,
    field: keyof Education,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newEducation = [...candidateData.education];
    newEducation[index] = { ...newEducation[index], [field]: e.target.value };
    setCandidateData({ ...candidateData, education: newEducation });
  };

  const handleCertificationChange = (
    index: number,
    field: keyof Certification,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newCertifications = [...candidateData.certifications];
    newCertifications[index] = { ...newCertifications[index], [field]: e.target.value };
    setCandidateData({ ...candidateData, certifications: newCertifications });
  };

  const handleSkillChange = (
    index: number,
    field: keyof Skill,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newSkills = [...candidateData.skills];
    newSkills[index] = { ...newSkills[index], [field]: e.target.value };
    setCandidateData({ ...candidateData, skills: newSkills });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(candidateData);
  };

  const addCandidateExperiences = () => {
    const newExperiences = [...candidateData.experiences];
    const lengthNewExperiences = newExperiences.length;
    const emtyValueExperiences = {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    }
    newExperiences[lengthNewExperiences] = emtyValueExperiences;
    setCandidateData({ ...candidateData, experiences: newExperiences });
  }

  const addCandidateEducation = () => {
    const newEducation = [...candidateData.education];
    const lengthNewEducation = newEducation.length;
    const emtyValueEducation = {
      degree: '',
      major: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }
    newEducation[lengthNewEducation] = emtyValueEducation;
    setCandidateData({ ...candidateData, education: newEducation });
  }

  const addCandidateCertificate = () => {
    const newCertifications = [...candidateData.certifications];
    const lengthCertificate = newCertifications.length;
    const emtyValue = {
      name: '',
      date: ''
    }
    newCertifications[lengthCertificate] = emtyValue;
    setCandidateData({ ...candidateData, certifications: newCertifications });
  }

  const addSkillCandidate = () => {
    const newSkills = [...candidateData.skills];
    const skillsLength = newSkills.length;
    const emtyValue = {
      name: '',
      score: 0
    }
    newSkills[skillsLength] = emtyValue;
    setCandidateData({ ...candidateData, skills: newSkills });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* CANDIDATE DETAILS */}
      <FormDetailsCandidate
        candidateData={candidateData}
        handleChange={handleChange}
      />

      {/* CANDIDATES EDUCATION */}
      <button
        type='button'
        className='px-5 py-3 bg-teal-800 rounded-md mx-10 mt-5 mb-5'
        onClick={addCandidateEducation}
      >
        <span className='text-white'>Add Education</span>
      </button>
      <CandidateEducational
        dataEducation={candidateData.education}
        handleEducationChange={handleEducationChange}
      />


      {/* CANDIDATE EXPERIENCES */}
      <button
        type='button'
        className='px-5 py-3 bg-teal-800 rounded-md mx-10 mt-5 mb-5'
        onClick={addCandidateExperiences}
      >
        <span className='text-white'>Add Experiences</span>
      </button>
      <CandidateExperiences
        dataExperiences={candidateData.experiences}
        handleExperienceChange={handleExperienceChange}
      />

      {/* CANDIDATE CERTIFICATION */}
      <button
        type='button'
        className='px-5 py-3 bg-teal-800 rounded-md mx-10 mt-5 mb-5'
        onClick={addCandidateCertificate}
      >
        <span className='text-white'>Add Certification</span>
      </button>
      <CandidateCertificateForm
        dataCertificate={candidateData.certifications}
        handleCertificationChange={handleCertificationChange}
      />

      {/* CANDIDATE SKILLS */}
      <button
        type='button'
        className='px-5 py-3 bg-teal-800 rounded-md mx-10 mt-5 mb-5'
        onClick={addSkillCandidate}
      >
        <span className='text-white'>Add Skill</span>
      </button>
      <CandidateSkillsForm
        dataSkill={candidateData.skills}
        handleSkillChange={handleSkillChange}
      />

      <button
        type="submit"
        className='bg-cyan-600 text-white ml-10 mt-5 px-6 py-2 mb-10 rounded-lg'>
        Submit
      </button>
    </form>
  );
}

export default CandidateForm;

// CandidateForm.tsx
import React, { useEffect, useRef, useState } from 'react';
import { CandidateData, Experience, Education, Certification, Skill, ThemeInterface } from '../../../../utils/models/models';
import FormDetailsCandidate from '../candidateDetails';
import CandidateExperiences from '../candidateExperience';
import CandidateEducational from '../candidateEducation';
import CandidateCertificateForm from '../candidateCertificate';
import CandidateSkillsForm from '../candidateSkills';
import { defaultValue } from './defaultValue';
import { fetchData } from '../../../../utils/helper';
import { useParams } from 'react-router-dom';
import AddButton from '../buttonAdd';
import { defaultValueTheme } from '../../../../utils/theme/defaultValue';
import { fetchDataTheme } from './getThemes';
import CV from '../../../CVOne';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CandidateForm: React.FC = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const [candidateData, setCandidateData] = useState<CandidateData>(defaultValue);
  const [downloadCvButton, setDownloadCvButton] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeInterface>(defaultValueTheme)
  const [showCv, setShowCv] = useState<boolean>(false);
  let { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      if (id) {
        setCandidateData(data[Number(id)]);
        setDownloadCvButton(true)
      }
    };
    loadData();
  }, [id]);

  useEffect(() => {
    const loadDataTheme = async () => {
      const data = await fetchDataTheme();
      setTheme(data);
    };
    loadDataTheme();
  }, [])


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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataLocal = await fetchData();
    const newDataLocal = [...dataLocal]
    if (id) {
      // IT MEANS IT EDITING DATA
      newDataLocal[Number(id)] = candidateData;
      const stringifyData = JSON.stringify(newDataLocal);
      await localStorage.setItem('candidateData', stringifyData);
      alert('Saved');
      setDownloadCvButton(true);
      scrollToTop();
    } else {
      // CREATEING NEW DATA
      const lengthData = dataLocal.length;
      newDataLocal[lengthData] = candidateData;
      const stringifyData = JSON.stringify(newDataLocal);
      await localStorage.setItem('candidateData', stringifyData);
      alert('Saved');
      setDownloadCvButton(true);
      scrollToTop();
    }
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

  const removeCandidateExperiences = (index: number) => {
    const newExperiences = [...candidateData.experiences];
    newExperiences.splice(index, 1)
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

  const removeEducation = (index: number) => {
    const newEducation = [...candidateData.education];
    newEducation.splice(index, 1)
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

  const removeCandidateCertificate = (index: number) => {
    const newCertifications = [...candidateData.certifications];
    newCertifications.splice(index, 1)
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

  const removeSkillCandidate = (index: number) => {
    const newSkills = [...candidateData.skills];
    newSkills.splice(index, 1)
    setCandidateData({ ...candidateData, skills: newSkills });
  }

  const printCVasPdf = async () => {
    if (pdfRef.current) {
      const scale = 3; // Increase this to improve the quality
      const canvas = await html2canvas(pdfRef.current, {
        scale: scale,
        useCORS: true,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('cv.pdf');
    }
  };

  return (
    <div>
      <button
        className={`*:items-end bg-red-900 text-white py-2 px-5 rounded-lg ${showCv ? '' : 'ml-10'} disabled:bg-slate-400 disabled:cursor-not-allowed`}
        onClick={() => { setShowCv(!showCv) }}
        disabled={!downloadCvButton}
      >
        {showCv ? 'Edit Data' : 'Generate CV PDF'}
      </button>
      {!showCv && (
        <p
          className='text-xs ml-10 italic'>
          You only able generate PDF once you complete the form and save it
        </p>
      )}


      {showCv ? (
        <div>
          <button className='text-white bg-cyan-950 px-5 py-2 rounded-lg my-5' onClick={printCVasPdf}>
            Download CV
          </button>
          <div ref={pdfRef} className='block mt-10'>
            <CV
              backgroundColor={theme?.backgroundTemplate}
              backgroundLeft={theme?.backgroundTemplateLeft}
              data={candidateData}
              fontSize={theme?.nameFontSize}
              nameColor={theme?.nameColor}
              watermark={theme?.watermark}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* CANDIDATE DETAILS */}
          <FormDetailsCandidate
            candidateData={candidateData}
            handleChange={handleChange}
          />

          {/* CANDIDATES EDUCATION */}
          <CandidateEducational
            removeData={(index) => { removeEducation(index) }}
            dataEducation={candidateData.education}
            handleEducationChange={handleEducationChange}
          />

          <AddButton
            onClick={addCandidateEducation}
            label='Add Education'
          />

          {/* CANDIDATE EXPERIENCES */}
          <CandidateExperiences
            removeData={(index) => { removeCandidateExperiences(index) }}
            dataExperiences={candidateData.experiences}
            handleExperienceChange={handleExperienceChange}
          />

          <AddButton
            label='Add Experiences'
            onClick={addCandidateExperiences}
          />

          {/* CANDIDATE CERTIFICATION */}
          <CandidateCertificateForm
            dataCertificate={candidateData.certifications}
            handleCertificationChange={handleCertificationChange}
            removeData={(index) => {removeCandidateCertificate(index)}}
          />

          <AddButton
            onClick={addCandidateCertificate}
            label='Add Certificate'
          />

          {/* CANDIDATE SKILLS */}
          <CandidateSkillsForm
            dataSkill={candidateData.skills}
            handleSkillChange={handleSkillChange}
            removeData={(index) => {removeSkillCandidate(index)}}
          />

          <AddButton
            onClick={addSkillCandidate}
            label='Add Skill'
          />

          <button
            type="submit"
            className='bg-cyan-600 text-white ml-10 mt-5 px-6 py-2 mb-10 rounded-lg block w-full'>
            Submit
          </button>
        </form>
      )
      }
    </div >
  );
}

export default CandidateForm;

import React, { useEffect, useState } from "react";
import Template from "./components/template";
import MultiHeader from "../../components/multiHeader";

interface TemplateDataInterface {
  backgroundTemplate: string;
  backgroundTemplateLeft: string;
  nameColor: string;
  name: string;
  watermark: string;
  nameFontSize: string;
}

const CVBuilder: React.FC = () => {
  const [name, setName] = useState<string>('Woodbury')
  const [backgroundTemplate, setBackgroundTemplate] = useState<string>('F1E5D1')
  const [backgroundTemplateLeft, setBackgroundTemplateLeft] = useState('FCF5ED')
  const [nameColor, setNameColor] = useState<string>('000');
  const [watermark, setWatermark] = useState<string>('');
  const [nameFontSize, setNameFontSize] = useState<string>('30')
  useEffect(() => {
    const dataLocalStorage = localStorage.getItem('themeCv');
    const dataToJSON = JSON.parse(dataLocalStorage ?? '') as TemplateDataInterface;
    setBackgroundTemplate(dataToJSON.backgroundTemplate);
    setName(dataToJSON.name);
    setBackgroundTemplateLeft(dataToJSON.backgroundTemplateLeft);
    setNameColor(dataToJSON.nameColor);
    setWatermark(dataToJSON.watermark);
    setNameFontSize(dataToJSON?.nameFontSize?.replace('px', ''));
  }, [])

  const saveCVTemplate = () => {
    const data = {
      name,
      backgroundTemplate,
      backgroundTemplateLeft,
      nameColor,
      watermark,
      nameFontSize
    }
    const dataToString = JSON.stringify(data);
    localStorage.setItem('themeCv', dataToString);
  }

  return (
    <div>
      <MultiHeader locationWindow="CV Builder Template" />
      <div className="container mx-auto">
        <div className="flex p-10">
          <div className="w-1/2">
            <div id="name-template">
              <label htmlFor="name">Template Name : </label><br />
              <input id="name"
                className="border-gray-700 border focus:border-blue-950 focus:border px-3 py-2"
                value={name}
                maxLength={15}
                onChange={(e) => {
                  setName(e.target.value)
                }} required />
            </div>
            <div className="mt-5">
              <label htmlFor="bg-template">Background Template : </label><br />
              <input id="bg-template"
                maxLength={6}
                className="border-gray-700 border focus:border-blue-950 focus:border px-3 py-2"
                value={backgroundTemplate}
                onChange={(e) => {
                  setBackgroundTemplate(e.target.value)
                }} required />
            </div>
            <div className="mt-5">
              <label htmlFor="watermark">Watermark : </label><br />
              <input id="watermark"
                className="border-gray-700 border focus:border-blue-950 focus:border px-3 py-2"
                value={watermark}
                maxLength={20}
                onChange={(e) => {
                  setWatermark(e.target.value)
                }} />
            </div>
            <button className="bg-green-600 py-2 px-4 rounded-md mt-5" onClick={saveCVTemplate}>
              <span className="text-white">Save</span>
            </button>
          </div>
          <div className="w-1/2 ">
            <div id="bg-template-left">
              <label htmlFor="bg-template-left">Background Template Left Side : </label><br />
              <input id="bg-template-left"
                className="border-gray-700 border focus:border-blue-950 focus:border px-3 py-2"
                value={backgroundTemplateLeft}
                maxLength={6}
                onChange={(e) => {
                  setBackgroundTemplateLeft(e.target.value)
                }} required />
            </div>
            <div className="mt-5">
              <label htmlFor="name-color">Name Color : </label><br />
              <input id="name-color"
                className="border-gray-700 border focus:border-blue-950 focus:border px-3 py-2"
                value={nameColor}
                maxLength={6}
                onChange={(e) => {
                  setNameColor(e.target.value)
                }} required />
            </div>
            <div className="mt-5">
              <label htmlFor="font-size">Name Font Size : </label><br />
              <input id="font-size"
                className="border-gray-700 border focus:border-blue-950 focus:border px-3 py-2"
                value={nameFontSize}
                maxLength={6}
                onChange={(e) => {
                  setNameFontSize(e.target.value)
                }} required />
            </div>

          </div>
        </div>
        <h4 className="font-bold text-3xl">Preview</h4>
        <Template
          backgroundColor={`#${backgroundTemplate}`}
          backgroundLeft={`#${backgroundTemplateLeft}`}
          watermark={watermark}
          nameColor={`#${nameColor}`}
          fontSize={`${nameFontSize}px`} />
      </div>
    </div>
  )
}

export default CVBuilder;
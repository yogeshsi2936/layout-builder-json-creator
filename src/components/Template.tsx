import React, { useState, useEffect } from "react";
import Table from "./ui/Table";
import DynamicForm from "../components/ui/DynamicForm";
import formOptions from "../assets/json/formOptions.json";
import defaultTemplateData from "../assets/json/formConfig.json";
import {useLayout }  from "../context/LayoutContext"

const Template: React.FC = () => {
  const { createTemplate, updateTemplate,deleteTemplate,token } = useLayout();
  const [isModalOpen, setModalOpen] = useState(false);
  const [styleOptions] = useState(token);
  const [templateData, setTemplateData] = useState<any>({});
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const storedData = localStorage.getItem("templates");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      localStorage.setItem("templates", JSON.stringify([]));
      setData([]);
    }
  }, []);

  const columns = ["Id", "TemplateName"];

  const generateRandomId = (): number => Math.floor(Math.random() * 100000000);

  const addTemplate = () => {
    console.log("Creating a new template...");
    setTemplateData(defaultTemplateData); // Set default template data
    setModalOpen(true);
    createTemplate()
  };

  const editTemplate = (id: number) => {
    console.log(`Updating template with ID: ${id}`);
    const templateToUpdate = data.find((template) => template.Id === id);
    if (templateToUpdate) {
      setTemplateData(templateToUpdate);
    }
    setModalOpen(true);
    updateTemplate()
  };

  const removeTemplate = (id: number) => {
    console.log(`Deleting template with ID: ${id}`);
    const updatedData = data.filter((template) => template.Id !== id);
    setData(updatedData);
    localStorage.setItem("templates", JSON.stringify(updatedData));
    deleteTemplate()
  };

  const closeModal = () => setModalOpen(false);

  const handleFormChange = (updatedFormData: any) => {
    setTemplateData(updatedFormData);
  };

  const saveTemplate = () => {
    let updatedData;
    if (templateData.Id) {
      updatedData = data.map((item) =>
        item.Id === templateData.Id ? templateData : item
      );
    } else {
      const newTemplate = { ...templateData, Id: generateRandomId() };
      updatedData = [...data, newTemplate];
    }

    setData(updatedData);
    localStorage.setItem("templates", JSON.stringify(updatedData));
    closeModal();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Templates</h1>
        <button
          onClick={addTemplate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Create New Template
        </button>
      </div>
      <Table columns={columns} data={data} onUpdate={editTemplate} onDelete={removeTemplate} />
      <DynamicForm
        isOpen={isModalOpen}
        templateData={templateData}
        onClose={closeModal}
        onSave={saveTemplate}
        onChange={handleFormChange}
        formOptions={formOptions}
        styleOptions={styleOptions}
      />
    </div>
  );
};

export default Template;

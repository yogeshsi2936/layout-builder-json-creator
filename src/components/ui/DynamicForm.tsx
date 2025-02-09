import React from "react";

type DynamicFormProps = {
  isOpen: boolean;
  templateData: any;
  onClose: () => void;
  onSave: () => void;
  onChange: (updatedFormData: any) => void;
  formOptions: any;
  styleOptions:any;
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  isOpen,
  templateData,
  onClose,
  onSave,
  onChange,
  formOptions,
  styleOptions
}) => {
  if (!isOpen) return null;

  const handleRootChange = (field: string, value: any) => {
    onChange({ ...templateData, [field]: value });
  };

  const handlePropertyChange = (field: string, value: any) => {
    const updatedProperties = { ...templateData.properties, [field]: value };
    onChange({ ...templateData, properties: updatedProperties });
  };

  const handleStyleChange = (field: string, value: any) => {
    const updatedStyle = { ...templateData.styles, [field]: value };
    onChange({ ...templateData, styles: updatedStyle });
  };
  const handleStylePaddingChange = (field: string, value: any) => {
    const updatedStyle = {
      ...templateData.styles,
      padding: {
        ...templateData.styles.padding, 
        [field]: value,                 
      }
    };
    onChange({ ...templateData, styles: updatedStyle })
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl sm:max-h-[90vh] overflow-auto transform transition-all">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Template Form</h2>

        <div>
            <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Template Name Input */}
                <div className="mb-4">
                    <label htmlFor="template-name" className="block text-sm font-medium text-gray-700">
                    Template Name
                    </label>
                    <input
                    type="text"
                    id="template-name"
                    value={templateData?.TemplateName || ""}
                    onChange={(e) => handleRootChange("TemplateName", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter template name"
                    />
                </div>

                {/* Template Type Dropdown */}
                <div>
                    <label htmlFor="template-type" className="block text-sm font-medium text-gray-700">
                    Template Type
                    </label>
                    <select
                    id="template-type"
                    value={templateData?.TemplateType || ""}
                    onChange={(e) => handleRootChange("TemplateType", e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option value="">Select Template Type</option>
                    {formOptions.template_type.map((type: string, index: number) => (
                        <option key={index} value={type}>
                        {type}
                        </option>
                    ))}
                    </select>
                </div>
            </div>

            {/* Properties objec */}
            <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Properties </h2>
                <div className="sm:col-span-2 flex flex-wrap">
                    {/* Full Width Checkbox */}
                    <div className="w-1/2 flex items-center mb-2">
                        <input
                        type="checkbox"
                        id="is-full-width"
                        checked={templateData?.properties?.is_full_width || false}
                        onChange={(e) => handlePropertyChange("is_full_width", e.target.checked)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="is-full-width" className="ml-2 text-sm font-medium text-gray-700">
                        Full Width
                        </label>
                    </div>

                    {/* Section Gap Checkbox Example */}
                    <div className="w-1/2 flex items-center mb-2">
                        <input
                        type="checkbox"
                        id="section-gap"
                        checked={templateData?.properties?.section_gap || false}
                        onChange={(e) => handlePropertyChange("section_gap", e.target.checked)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="section-gap" className="ml-2 text-sm font-medium text-gray-700">
                        Section Gap
                        </label>
                    </div>
                </div>
                {/* Stack Dropdown */}
                <div>
                    <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                    Stack
                    </label>
                    <select
                    id="stack"
                    value={templateData?.properties?.stack || ""}
                    onChange={(e) => handlePropertyChange("stack", e.target.value.split(","))}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    {formOptions.stack_type.map((type: string, index: number) => (
                        <option key={index} value={type}>
                        {type}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Column Span */}
                <div>
                    <label htmlFor="column-span" className="block text-sm font-medium text-gray-700">
                    Column Span
                    </label>
                    <input
                    type="number"
                    id="column-span"
                    min="1"
                    max="12"
                    value={templateData?.properties?.column_span || 1}
                    onChange={(e) => handlePropertyChange("column_span", parseInt(e.target.value, 10))}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Layout Type Dropdown */}
                <div className="sm:col-span-2">
                    <label htmlFor="layout-type" className="block text-sm font-medium text-gray-700">
                    Layout Type
                    </label>
                    <select
                    id="layout-type"
                    value={templateData?.properties?.layout_type || ""}
                    onChange={(e) => handlePropertyChange("layout_type", e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option value="">Select Layout Type</option>
                    {formOptions.layout_type.map((type: string, index: number) => (
                        <option key={index} value={type}>
                        {type}
                        </option>
                    ))}
                    </select>
                </div>
            </div>

            {/* styles objec */}
            <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 mt-8"> styles </h2>
                <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="">
                        <label htmlFor="template-name" className="block text-sm font-medium text-gray-700">
                            Background Image
                        </label>
                        <input
                        type="text"
                        id="background-image"
                        value={templateData?.styles?.background_image || ""}
                        onChange={(e) => handleStyleChange("background_image", e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter background image path"
                        />
                    </div>
                    {/* background color Dropdown */}
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                        background color
                        </label>
                        <select
                        id="background-color"
                        value={templateData?.styles?.background_color || ""}
                        onChange={(e) => handleStyleChange("background_color", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {Object.entries(styleOptions.color.light as Record<string, string>).map(([key, value], index) => (
                        <option key={index} value={key}>
                            {value}
                        </option>
                        ))}
                        </select>
                    </div>

                    {/* gap Dropdown */}
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                        Gap
                        </label>
                        <select
                        id="gapr"
                        value={templateData?.styles?.gap || ""}
                        onChange={(e) => handleStyleChange("gap", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {Object.entries(styleOptions.spacing as Record<string, string>).map(([key, value], index) => (
                        <option key={index} value={key}>
                            {value}
                        </option>
                        ))}
                        </select>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 mt-8"> Padding </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {/* padding top Dropdown */}
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                        Top Padding Dropdown
                        </label>
                        <select
                        id="gapr"
                        value={templateData?.styles?.padding?.top || ""}
                        onChange={(e) => handleStylePaddingChange("top", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {Object.entries(styleOptions.spacing as Record<string, string>).map(([key, value], index) => (
                        <option key={index} value={key}>
                            {value}
                        </option>
                        ))}
                        </select>
                    </div>
                    {/* padding right Dropdown */}
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                        Right Padding Dropdown
                        </label>
                        <select
                        id="gapr"
                        value={templateData?.styles?.padding?.right || ""}
                        onChange={(e) => handleStylePaddingChange("right", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {Object.entries(styleOptions.spacing as Record<string, string>).map(([key, value], index) => (
                        <option key={index} value={key}>
                            {value}
                        </option>
                        ))}
                        </select>
                    </div>
                    {/* padding bottom Dropdown */}
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                        Bottom Padding Dropdown
                        </label>
                        <select
                        id="gapr"
                        value={templateData?.styles?.padding?.bottom || ""}
                        onChange={(e) => handleStylePaddingChange("bottom", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {Object.entries(styleOptions.spacing as Record<string, string>).map(([key, value], index) => (
                        <option key={index} value={key}>
                            {value}
                        </option>
                        ))}
                        </select>
                    </div>
                    {/* padding left Dropdown */}
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-gray-700">
                        Left Padding Dropdown
                        </label>
                        <select
                        id="gapr"
                        value={templateData?.styles?.padding?.left || ""}
                        onChange={(e) => handleStylePaddingChange("left", e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {Object.entries(styleOptions.spacing as Record<string, string>).map(([key, value], index) => (
                        <option key={index} value={key}>
                            {value}
                        </option>
                        ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;

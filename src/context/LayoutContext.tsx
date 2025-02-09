import React, { createContext, useState, useContext, ReactNode } from 'react';
import tokens from './../assets/json/token/wf.json';

// Define the context type
interface LayoutBuilderContextType {
  token:{};
  createTemplate: () => void;
  updateTemplate: () => void;
  deleteTemplate: () => void;
  createOrganism: () => void;
  updateOrganism: () => void;
  deleteOrganism: () => void;
  createAtoms: () => void;
  updateAtoms: () => void;
  deleteAtoms: () => void;
  createMolecules: () => void;
  updateMolecules: () => void;
  deleteMolecules: () => void;
}

// Create the context with an initial value of `undefined`
const LayoutBuilderContext = createContext<LayoutBuilderContextType | undefined>(undefined);

// Custom hook to use the LayoutContext
export const useLayout = (): LayoutBuilderContextType => {
  const context = useContext(LayoutBuilderContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutBuilderProvider');
  }
  return context;
};

// Define props for the provider
interface LayoutBuilderProviderProps {
  children: ReactNode;
}

// Provider component
export const LayoutBuilderProvider: React.FC<LayoutBuilderProviderProps> = ({ children }) => {
  const [token] = useState(() => tokens?.data?.tokens || {});
  const [templates, setTemplates] = useState(() => {
    const storedTemplates = localStorage.getItem('templates');
    return storedTemplates ? JSON.parse(storedTemplates) : [];
  });

  const [organisms, setOrganisms] = useState(() => {
    const storedOrganisms = localStorage.getItem('organisms');
    return storedOrganisms ? JSON.parse(storedOrganisms) : [];
  });

  // Template functions
  const createTemplate = () => {
    console.log("==createTemplate==");
    
  };
  const updateTemplate = () => {
    console.log("==updateTemplate==");

  };
  const deleteTemplate = () => {
    console.log("==deleteTemplate==");

  };

  // Organism functions
  const createOrganism = () => {};
  const updateOrganism = () => {};
  const deleteOrganism = () => {};

  // Atom functions
  const createAtoms = () => {};
  const updateAtoms = () => {};
  const deleteAtoms = () => {};

  // Molecule functions
  const createMolecules = () => {};
  const updateMolecules = () => {};
  const deleteMolecules = () => {};

  const value: LayoutBuilderContextType = {
    token,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    createOrganism,
    updateOrganism,
    deleteOrganism,
    createAtoms,
    updateAtoms,
    deleteAtoms,
    createMolecules,
    updateMolecules,
    deleteMolecules,
  };

  return (
    <LayoutBuilderContext.Provider value={value}>
      {children}
    </LayoutBuilderContext.Provider>
  );
};

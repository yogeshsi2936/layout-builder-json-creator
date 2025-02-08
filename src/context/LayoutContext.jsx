import React, { createContext, useState, useContext } from 'react';
import tokens from './../assets/json/token/wf.json'
// Create the context
const LayoutBuilderContext = createContext();

// Custom hook to use the LayoutContext easily
export const useLayout = () => useContext(LayoutBuilderContext);

// Provider component
export const useLayoutProvider = ({ children }) => {
    const [ token ] = useState(()=>{
        return tokens?.data?.tokens || {}
    })
    const [ templates, setTemplates ] = useState(JSON.parse(localstorage.getItems('templates')) || [])

    const [ organisms, setOrganisms ] = useState(JSON.parse(localstorage.getItems('templates')) || [])

    // Templates
    //create 
    const createTemplate = () => {

    }
    //update 
    const updateTemplate = () => {
        
    }

    //delete
    const deleteTemplate = () => {
        
    }
    // Organisms
    //create 
    const createOrganism = () => {

    }
    //update 
    const updateOrganism = () => {
        
    }

    //delete
    const deleteOrganism = () => {
        
    }
    // atoms
    //create 
    const createAtoms = () => {

    }
    //update 
    const updateAtoms = () => {
        
    }

    //delete
    const deleteAtoms = () => {
        
    }

    //molecules
    //create 
    const createMolecules = () => {

    }
    //update 
    const updateMolecules = () => {
        
    }

    //delete
    const deleteMolecules = () => {
        
    }
    const value = {
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
        deleteMolecules
    }

  return (
    <LayoutBuilderContext.Provider value={value}>
      {children}
    </LayoutBuilderContext.Provider>
  );
};

/**
 * This enum is used to represent the keys of the university modules in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/university-modules/`.
 * Whenever a new university module is added to the database, a new key should be added to this enum.
 *
 * @see {@link universityModuleMap} at `database/university-modules.ts`
 */
enum ModuleDatabaseKeys {
  // 1st semester
  NSEC_Physics1 = "PH101",
  NSEC_Mathematics1 = "M101",
  NSEC_EngineeringMechanics = "ME101",
  NSEC_Communication = "HU101",
  NSEC_ElectricalAndElectronics1 = "ES101",
  // 2nd semester
  NSEC_ComputerProgramming = "CS201",
  NSEC_Chemistry = "CH201",
  NSEC_Mathematics2 = "M201",
  NSEC_ThermodynamicsAndFluid = "ME201",
  NSEC_ElectricalAndElectronics2 = "ES201",

  NSEC_Physics2 = "PH301",
  NSEC_AppliedThemodynamics = "ME301",
  NSEC_StrengthOfMaterials = "ME302",
  NSEC_EngineeringMaterials = "ME303",
  NSEC_NumericalMethods = "MCS401",
  NSEC_Mathematics3 = "M401",
  NSEC_FluidMechanicsAndHydraulicMachines = "ME401",
  NSEC_Mechanisms = "ME402",
  NSEC_ManufacturingProcesses = "ME403",
  NSEC_DynamicsOfMachines = "ME501",
  NSEC_HeatTransfer = "ME502",
  NSEC_DesignOfMachineElements = "ME503",
  NSEC_Metrology = "ME504",
  NSEC_AppliedFluidMechanics = "ME505B",
  NSEC_ICEngines = "ME601",
}

export default ModuleDatabaseKeys;

const schema = {};
schema.Substance = require("./Substance.js");
/**
 * Schema.org/Drug
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them.
 *
 * @author schema.org
 * @class Drug
 * @module org.schema
 * @extends Substance
 */
module.exports = class Drug extends schema.Substance {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Drug");
	}

	/**
	 * Schema.org/mechanismOfAction
	 * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
	 *
	 * @property mechanismOfAction
	 * @type Text
	 */
	mechanismOfAction;

	/**
	 * Schema.org/pregnancyCategory
	 * Pregnancy category of this drug.
	 *
	 * @property pregnancyCategory
	 * @type DrugPregnancyCategory
	 */
	pregnancyCategory;

	/**
	 * Schema.org/isProprietary
	 * True if this item's name is a proprietary/brand name (vs. generic name).
	 *
	 * @property isProprietary
	 * @type Boolean
	 */
	isProprietary;

	/**
	 * Schema.org/includedInHealthInsurancePlan
	 * The insurance plans that cover this drug.
	 *
	 * @property includedInHealthInsurancePlan
	 * @type HealthInsurancePlan
	 */
	includedInHealthInsurancePlan;

	/**
	 * Schema.org/maximumIntake
	 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
	 *
	 * @property maximumIntake
	 * @type MaximumDoseSchedule
	 */
	maximumIntake;

	/**
	 * Schema.org/drugClass
	 * The class of drug this belongs to (e.g., statins).
	 *
	 * @property drugClass
	 * @type DrugClass
	 */
	drugClass;

	/**
	 * Schema.org/clinicalPharmacology
	 * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
	 *
	 * @property clinicalPharmacology
	 * @type Text
	 */
	clinicalPharmacology;

	/**
	 * Schema.org/rxcui
	 * The RxCUI drug identifier from RXNORM.
	 *
	 * @property rxcui
	 * @type Text
	 */
	rxcui;

	/**
	 * Schema.org/legalStatus
	 * The drug or supplement's legal status, including any controlled substance schedules that apply.
	 *
	 * @property legalStatus
	 * @type MedicalEnumeration
	 */
	legalStatus;

	/**
	 * Schema.org/breastfeedingWarning
	 * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
	 *
	 * @property breastfeedingWarning
	 * @type Text
	 */
	breastfeedingWarning;

	/**
	 * Schema.org/nonProprietaryName
	 * The generic name of this drug or supplement.
	 *
	 * @property nonProprietaryName
	 * @type Text
	 */
	nonProprietaryName;

	/**
	 * Schema.org/labelDetails
	 * Link to the drug's label details.
	 *
	 * @property labelDetails
	 * @type URL
	 */
	labelDetails;

	/**
	 * Schema.org/overdosage
	 * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
	 *
	 * @property overdosage
	 * @type Text
	 */
	overdosage;

	/**
	 * Schema.org/interactingDrug
	 * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
	 *
	 * @property interactingDrug
	 * @type Drug
	 */
	interactingDrug;

	/**
	 * Schema.org/clincalPharmacology
	 * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
	 *
	 * @property clincalPharmacology
	 * @type Text
	 */
	clincalPharmacology;

	/**
	 * Schema.org/relatedDrug
	 * Any other drug related to this one, for example commonly-prescribed alternatives.
	 *
	 * @property relatedDrug
	 * @type Drug
	 */
	relatedDrug;

	/**
	 * Schema.org/foodWarning
	 * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
	 *
	 * @property foodWarning
	 * @type Text
	 */
	foodWarning;

	/**
	 * Schema.org/isAvailableGenerically
	 * True if the drug is available in a generic form (regardless of name).
	 *
	 * @property isAvailableGenerically
	 * @type Boolean
	 */
	isAvailableGenerically;

	/**
	 * Schema.org/proprietaryName
	 * Proprietary name given to the diet plan, typically by its originator or creator.
	 *
	 * @property proprietaryName
	 * @type Text
	 */
	proprietaryName;

	/**
	 * Schema.org/activeIngredient
	 * An active ingredient, typically chemical compounds and/or biologic substances.
	 *
	 * @property activeIngredient
	 * @type Text
	 */
	activeIngredient;

	/**
	 * Schema.org/administrationRoute
	 * A route by which this drug may be administered, e.g. 'oral'.
	 *
	 * @property administrationRoute
	 * @type Text
	 */
	administrationRoute;

	/**
	 * Schema.org/warning
	 * Any FDA or other warnings about the drug (text or URL).
	 *
	 * @property warning
	 * @type Text
	 */
	warning;

	/**
	 * Schema.org/alcoholWarning
	 * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
	 *
	 * @property alcoholWarning
	 * @type Text
	 */
	alcoholWarning;

	/**
	 * Schema.org/manufacturer
	 * The manufacturer of the product.
	 *
	 * @property manufacturer
	 * @type Organization
	 */
	manufacturer;

	/**
	 * Schema.org/dosageForm
	 * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
	 *
	 * @property dosageForm
	 * @type Text
	 */
	dosageForm;

	/**
	 * Schema.org/pregnancyWarning
	 * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
	 *
	 * @property pregnancyWarning
	 * @type Text
	 */
	pregnancyWarning;

	/**
	 * Schema.org/drugUnit
	 * The unit in which the drug is measured, e.g. '5 mg tablet'.
	 *
	 * @property drugUnit
	 * @type Text
	 */
	drugUnit;

	/**
	 * Schema.org/availableStrength
	 * An available dosage strength for the drug.
	 *
	 * @property availableStrength
	 * @type DrugStrength
	 */
	availableStrength;

	/**
	 * Schema.org/prescribingInfo
	 * Link to prescribing information for the drug.
	 *
	 * @property prescribingInfo
	 * @type URL
	 */
	prescribingInfo;

	/**
	 * Schema.org/prescriptionStatus
	 * Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
	 *
	 * @property prescriptionStatus
	 * @type Text
	 */
	prescriptionStatus;

	/**
	 * Schema.org/doseSchedule
	 * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
	 *
	 * @property doseSchedule
	 * @type DoseSchedule
	 */
	doseSchedule;

}
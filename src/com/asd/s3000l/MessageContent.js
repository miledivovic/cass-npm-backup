
module.exports = class MessageContent extends EcRemoteLinkedData {
messageContentItems;
supportingContentItems;
uid;
crud;

 getMessageContentItems() {
        return messageContentItems;
    }

 setMessageContentItems( value) {
        this.messageContentItems = value;
    }

 getSupportingContentItems() {
        return supportingContentItems;
    }

 setSupportingContentItems( value) {
        this.supportingContentItems = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

    MessageContentItems = class MessageContentItems {
tasks;
learningObjectives;
warningCautionNotes;
trades;
skills;
jobPosns;

 getTasks() {
            return tasks;
        }

 setTasks( value) {
            this.tasks = value;
        }

 getLearningObjectives() {
            return learningObjectives;
        }

 setLearningObjectives( value) {
            this.learningObjectives = value;
        }

 getWarningCautionNotes() {
            return warningCautionNotes;
        }

 setWarningCautionNotes( value) {
            this.warningCautionNotes = value;
        }

 getTrades() {
            return trades;
        }

 setTrades( value) {
            this.trades = value;
        }

 getSkills() {
            return skills;
        }

 setSkills( value) {
            this.skills = value;
        }

 getJobPosns() {
            return jobPosns;
        }

 setJobPosns( value) {
            this.jobPosns = value;
        }

        JobPosns = class JobPosns {
jobPos;

 getJobPos() {
                if (jobPos == null) {
                    jobPos = [];
                }
                return this.jobPos;
            }
        }

        LearningObjectives = class LearningObjectives {
learnObj;

 getLearnObj() {
                if (learnObj == null) {
                    learnObj = [];
                }
                return this.learnObj;
            }
        }

        Skills = class Skills {
skill;

 getSkill() {
                if (skill == null) {
                    skill = [];
                }
                return this.skill;
            }
        }

        Tasks = class Tasks {
taskNonAbstractClasses;

 getTaskNonAbstractClasses() {
                if (taskNonAbstractClasses == null) {
                    taskNonAbstractClasses = [];
                }
                return this.taskNonAbstractClasses;
            }
        }

        Trades = class Trades {
trade;

 getTrade() {
                if (trade == null) {
                    trade = [];
                }
                return this.trade;
            }
        }

        WarningCautionNotes = class WarningCautionNotes {
wcn;

 getWcn() {
                if (wcn == null) {
                    wcn = [];
                }
                return this.wcn;
            }
        }
    }

    SupportingContentItems = class SupportingContentItems {
products;
breakdownElements;
parts;
taskRequirements;
maintenanceLevels;
maintenanceLocations;
operatingLocationTypes;
operatingLocations;
substances;
specialEvents;
productUsagePhases;
resourceSpecifications;
changeRequests;
circuitBreakers;
securityClasses;
documents;
organizations;
applicabilityStatements;
applicabilityConditions;

 getProducts() {
            return products;
        }

 setProducts( value) {
            this.products = value;
        }

 getBreakdownElements() {
            return breakdownElements;
        }

 setBreakdownElements( value) {
            this.breakdownElements = value;
        }

 getParts() {
            return parts;
        }

 setParts( value) {
            this.parts = value;
        }

 getTaskRequirements() {
            return taskRequirements;
        }

 setTaskRequirements( value) {
            this.taskRequirements = value;
        }

 getMaintenanceLevels() {
            return maintenanceLevels;
        }

 setMaintenanceLevels( value) {
            this.maintenanceLevels = value;
        }

 getMaintenanceLocations() {
            return maintenanceLocations;
        }

 setMaintenanceLocations( value) {
            this.maintenanceLocations = value;
        }

 getOperatingLocationTypes() {
            return operatingLocationTypes;
        }

 setOperatingLocationTypes( value) {
            this.operatingLocationTypes = value;
        }

 getOperatingLocations() {
            return operatingLocations;
        }

 setOperatingLocations( value) {
            this.operatingLocations = value;
        }

 getSubstances() {
            return substances;
        }

 setSubstances( value) {
            this.substances = value;
        }

 getSpecialEvents() {
            return specialEvents;
        }

 setSpecialEvents( value) {
            this.specialEvents = value;
        }

 getProductUsagePhases() {
            return productUsagePhases;
        }

 setProductUsagePhases( value) {
            this.productUsagePhases = value;
        }

 getResourceSpecifications() {
            return resourceSpecifications;
        }

 setResourceSpecifications( value) {
            this.resourceSpecifications = value;
        }

 getChangeRequests() {
            return changeRequests;
        }

 setChangeRequests( value) {
            this.changeRequests = value;
        }

 getCircuitBreakers() {
            return circuitBreakers;
        }

 setCircuitBreakers( value) {
            this.circuitBreakers = value;
        }

 getSecurityClasses() {
            return securityClasses;
        }

 setSecurityClasses( value) {
            this.securityClasses = value;
        }

 getDocuments() {
            return documents;
        }

 setDocuments( value) {
            this.documents = value;
        }

 getOrganizations() {
            return organizations;
        }

 setOrganizations( value) {
            this.organizations = value;
        }

 getApplicabilityStatements() {
            return applicabilityStatements;
        }

 setApplicabilityStatements( value) {
            this.applicabilityStatements = value;
        }

 getApplicabilityConditions() {
            return applicabilityConditions;
        }

 setApplicabilityConditions( value) {
            this.applicabilityConditions = value;
        }

        ApplicabilityConditions = class ApplicabilityConditions {
cond;

 getCond() {
                if (cond == null) {
                    cond = [];
                }
                return this.cond;
            }
        }

        ApplicabilityStatements = class ApplicabilityStatements {
applicabilityStatementNonAbstractClasses;

 getApplicabilityStatementNonAbstractClasses() {
                if (applicabilityStatementNonAbstractClasses == null) {
                    applicabilityStatementNonAbstractClasses = [];
                }
                return this.applicabilityStatementNonAbstractClasses;
            }
        }

        BreakdownElements = class BreakdownElements {
breakdownElementNonAbstractClasses;

 getBreakdownElementNonAbstractClasses() {
                if (breakdownElementNonAbstractClasses == null) {
                    breakdownElementNonAbstractClasses = [];
                }
                return this.breakdownElementNonAbstractClasses;
            }
        }

        ChangeRequests = class ChangeRequests {
cr;

 getCr() {
                if (cr == null) {
                    cr = [];
                }
                return this.cr;
            }
        }

        CircuitBreakers = class CircuitBreakers {
cb;

 getCb() {
                if (cb == null) {
                    cb = [];
                }
                return this.cb;
            }
        }

        Documents = class Documents {
documentNonAbstractClasses;

 getDocumentNonAbstractClasses() {
                if (documentNonAbstractClasses == null) {
                    documentNonAbstractClasses = [];
                }
                return this.documentNonAbstractClasses;
            }
        }

        MaintenanceLevels = class MaintenanceLevels {
mlv;

 getMlv() {
                if (mlv == null) {
                    mlv = [];
                }
                return this.mlv;
            }
        }

        MaintenanceLocations = class MaintenanceLocations {
mLoc;

 getMLoc() {
                if (mLoc == null) {
                    mLoc = [];
                }
                return this.mLoc;
            }
        }

        OperatingLocationTypes = class OperatingLocationTypes {
opLocType;

 getOpLocType() {
                if (opLocType == null) {
                    opLocType = [];
                }
                return this.opLocType;
            }
        }

        OperatingLocations = class OperatingLocations {
opLoc;

 getOpLoc() {
                if (opLoc == null) {
                    opLoc = [];
                }
                return this.opLoc;
            }
        }

        Organizations = class Organizations {
org;

 getOrg() {
                if (org == null) {
                    org = [];
                }
                return this.org;
            }
        }

        Parts = class Parts {
partAsDesignedNonAbstractClasses;

 getPartAsDesignedNonAbstractClasses() {
                if (partAsDesignedNonAbstractClasses == null) {
                    partAsDesignedNonAbstractClasses = [];
                }
                return this.partAsDesignedNonAbstractClasses;
            }
        }

        ProductUsagePhases = class ProductUsagePhases {
usagePhaseDef;

 getUsagePhaseDef() {
                if (usagePhaseDef == null) {
                    usagePhaseDef = [];
                }
                return this.usagePhaseDef;
            }
        }

        Products = class Products {
prod;

 getProd() {
                if (prod == null) {
                    prod = [];
                }
                return this.prod;
            }
        }

        ResourceSpecifications = class ResourceSpecifications {
resourceSpecificationNonAbstractClasses;

 getResourceSpecificationNonAbstractClasses() {
                if (resourceSpecificationNonAbstractClasses == null) {
                    resourceSpecificationNonAbstractClasses = [];
                }
                return this.resourceSpecificationNonAbstractClasses;
            }
        }

        SecurityClasses = class SecurityClasses {
secClassDef;

 getSecClassDef() {
                if (secClassDef == null) {
                    secClassDef = [];
                }
                return this.secClassDef;
            }
        }

        SpecialEvents = class SpecialEvents {
sEvnt;

 getSEvnt() {
                if (sEvnt == null) {
                    sEvnt = [];
                }
                return this.sEvnt;
            }
        }

        Substances = class Substances {
subs;

 getSubs() {
                if (subs == null) {
                    subs = [];
                }
                return this.subs;
            }
        }

        TaskRequirements = class TaskRequirements {
taskRequirementNonAbstractClasses;

 getTaskRequirementNonAbstractClasses() {
                if (taskRequirementNonAbstractClasses == null) {
                    taskRequirementNonAbstractClasses = [];
                }
                return this.taskRequirementNonAbstractClasses;
            }
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "MessageContent");
	}
};

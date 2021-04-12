/**
 *  Competencies include skills, knowledge, abilities, traits, and combinations thereof that are needed to perform a task or job. In CASS, competencies are identified and located using a globally unique ID. Competencies can be further described using titles, descriptions, levels, indicators (coming soon), roll-up rules, and relationships to other competencies.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Competency
 *  @module org.cassproject
 *  @extends CreativeWork
 */
module.exports = class Competency extends schema.CreativeWork{
    constructor(){
        this.setContextAndType(Cass.context, Competency.myType);
    }
    static TYPE_0_1 = "http://schema.eduworks.com/cass/0.1/competency";
    static TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/competency";
    static TYPE_0_3 = "http://schema.cassproject.org/0.2/Competency";
    static TYPE_0_4 = "http://schema.cassproject.org/0.3/Competency";
    static TYPE_0_5 = "https://schema.cassproject.org/0.3/Competency";
    static TYPE_0_6 = "https://schema.cassproject.org/0.4/Competency";
    static myType = Competency.TYPE_0_6;
    /**
     *  Scope in which the competency may be applied. e.g. Underwater.
     * 
     *  @property scope
     *  @type string
     */
    scope = null;
    upgrade() {
        EcRemoteLinkedData.upgrade.call(this);
        if (Competency.TYPE_0_1.equals(this.type)) {
            if (this.url != null && this.sameAs == null) {
                this.sameAs = this.url;
                this.url = null;
            }
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Cass.context_0_2, Competency.TYPE_0_2);
        }
        if (Competency.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_3, Competency.TYPE_0_3);
        }
        if (Competency.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_4, Competency.TYPE_0_4);
        }
        if (Competency.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, Competency.TYPE_0_5);
        }
        if (Competency.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, Competency.TYPE_0_6);
        }
    };
    getTypes() {
        var a = new Array();
        a.push(Competency.TYPE_0_6);
        a.push(Competency.TYPE_0_5);
        a.push(Competency.TYPE_0_4);
        a.push(Competency.TYPE_0_3);
        a.push(Competency.TYPE_0_2);
        a.push(Competency.TYPE_0_1);
        return a;
    };
};

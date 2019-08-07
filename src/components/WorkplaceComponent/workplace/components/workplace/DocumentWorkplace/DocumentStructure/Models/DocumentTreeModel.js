/**
 * The class which represents the document tree which consists of paragraphs, nested in each other.
 */
export default class DocumentTreeModel { 
    constructor(paragraphs) { 
        this._paragraphs = paragraphs;
    }

    paragraphs = () => this._paragraphs;

    /**
     * Public wrapper for the _getPargraphWith
     * @returns {The paragraph object if the paragraph with the given id exists, NULL otherwise}
     */
    getParagraph(id) { 
        return this._getPargraphWith(id, this._paragraphs);
    }

    /**
     * @param {List pf paragraphs where the search will be taking place} paragraphs
     * @returns {The paragraph object if the paragraph with the given id exists, NULL otherwise} 
     */
    _getPargraphWith(id, paragraphs) {
        for (let par of paragraphs) {
            alert(par.id + " " + id); 
            if (par.id === id) { 
                return par;
            }
        }

        for (let par of paragraphs) { 
            if (this._doesParagraphHaveNestedParagraphs(par)) { 
                return this._getPargraphWith(id, par.paragraphs);
            }
        }
    }

    _doesParagraphHaveNestedParagraphs(paragraph) { 
        return !(paragraph.paragraphs === undefined || paragraph.paragraphs === null || paragraph.paragraphs.length === 0)
    }

    getContentParagraphs(name) { 
        let paragraphsList = [];
        this._getContentParagraphsWith(name, this._paragraphs, paragraphsList)
        
        return paragraphsList;
    }

    _getContentParagraphsWith(name, paragraphs, paragraphsList) { 
        for (let par of paragraphs) { 
            if (par.name.indexOf(name) > -1 && par.type === "content") { 
                paragraphsList.push(par);
            }
        }

        for (let par of paragraphs) { 
            if (this._doesParagraphHaveNestedParagraphs(par)) { 
                this._getContentParagraphsWith(name, par.paragraphs, paragraphsList);
            }
        }
    }
}
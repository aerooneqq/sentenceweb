import React, {Component} from "react";

import "./TemplateStructure.css";
import TemplateStructureHeader from "./TemplateStructureHeader/TemplateStructureHeader";
import TemplateStructureTreeContainer from "./TemplateStructureTree/TemplateStructureTreeContainer"
import { deepCopy } from "../../../../../../services/Utility/UtilityFunctions";
import TemplatesService from "../../../../../../services/TemplateService/TemplateService";
import { alertAppMessage } from "../../../../../ApplicationMessage/ApplicationMessageManager";

export default class TemplateStructure extends Component {
    constructor(props) { 
        super(props);

        this.state = { 
            items: props.template.items
        }

        this.templateService = new TemplatesService(localStorage.getItem("token"));

        this.secondItems = deepCopy(props.template.items);

        this.updateTemplateStructure = this.updateTemplateStructure.bind(this);
        this.updateStructure = this.updateStructure.bind(this);
    }

    updateStructure() { 
        this.setState({ 
            items: this.secondItems
        });
    }

    updateTemplateStructure() { 
        this.templateService.updateTemplateStructure(this.props.template.id, this.secondItems)
            .then(res => {
                this.setState({
                    items: res.data.items,
                }, () => {
                    this.secondItems = deepCopy(this.state.items);
                    alertAppMessage("The structure was updated", "success");
                });
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while updating structure");
            })
    }

    render() {
        return (
            <div className = "template-structure-outer-container">
                <TemplateStructureHeader headerText = {this.props.template.name}
                                         updateTemplateStructure = {this.updateTemplateStructure} />
                <TemplateStructureTreeContainer items = {this.secondItems}
                                                updateStructure = {this.updateStructure} />
            </div>
        )
    }
}
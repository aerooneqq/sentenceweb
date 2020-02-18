import React from "react";
import {useDrag, DragPreviewImage, useDrop} from "react-dnd";

//Components
import DocumentTreeItem from "./DocumentTreeItem";

export default function DragableTreeItem(props) { 
    const [{isDragging}, drag, preview] = useDrag({ 
        item: 
        {
            type: "DragableTreeItem",
            paragraphID: props.item.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    });

    const[, drop] = useDrop({ 
        accept: "DragableTreeItem",
        drop: async (item) => { 
            alert(props.item.id + " " + item.itemID)
        }
    });

    return (
        <>
            <div ref = {drag}>
                <div ref = {drop}>
                    <DocumentTreeItem {...props} />
                </div>
            </div>
        </>
    )
}
import React from 'react'

import "./ManageClassroom.css"

export default function ManageClassroom() {
    return (
        <div id="div2">
            <h2 id="h2">Create new classroom</h2>
            <p id="p">Recommended: Use a common naming convention to name your classrooms.</p>
            <p id="p1">Class Name</p>
            <input type="text" id="text1" placeholder="Enter name"/>
            <p id="p2">Assign a teacher</p>
            <input type="text" id="text2" placeholder="Enter teacher ID"/>
            <p id="p3">Teacher Name</p>
            <input type="text" id="text3" placeholder="Auto fill"/>
            <p id="p4">Assign students</p>
            <input type="text"  id="text4" placeholder=""/>
            <button type="submit" id="button1">ADD CLASSROOM</button>
        </div>
    )
}

import React, { useState } from 'react';

const EducationTab = () => {
    const [showCourses, setShowCourses] = useState(false);

    const toggleCourses = () => {
        setShowCourses(!showCourses);
    };

    return (
        <div className="education-tab overflow-auto">
            <div className="education-details">
                <p><strong>Wilfrid Laurier University, Waterloo ON</strong></p>
                <p>B.Sc. in Computer Science, 2022 - 2026</p>
                <p>Concentration: Big Data Systems | Minor: UX Design</p>
                <p>GPA: 8.5/12.0</p>
            </div>
        </div>
    );
};

export default EducationTab;

/* eslint-disable */
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Separator } from './common/CustomBootstrap';

export default function FilterDropdown() {
    const [expanded, setExpanded] = useState({
        status: true,
        satisfied: false,
        reviewLinkClicked: true,
        suggestionForImprovement: false
    });
    const [filters, setFilters] = useState({
        status: { lead: false, customer: true },
        satisfied: { yes: false, no: false },
        reviewLinkClicked: { done: true, close: false },
        suggestionForImprovement: { option1: false, option2: false, option3: false }
    });
    const [visible, setVisible] = useState(true); // New state to control visibility

    const toggleExpand = (section) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleCheckboxChange = (section, option) => {
        setFilters(prev => ({
            ...prev,
            [section]: { ...prev[section], [option]: !prev[section][option] }
        }));
    };

    const handleReset = () => {
        setFilters({
            status: { lead: false, customer: false },
            satisfied: { yes: false, no: false },
            reviewLinkClicked: { done: false, close: false },
            suggestionForImprovement: { option1: false, option2: false, option3: false }
        });
    };

    const renderCheckboxes = (section) => {
        return Object.entries(filters[section]).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: 4 }}>
                <label className="checkbox_r">
                    <input
                        type="checkbox"
                        className="checkbox__input_r"
                        checked={value}
                        onChange={() => handleCheckboxChange(section, key)}
                    />
                    <span
                        className="checkbox__inner_r"
                        style={{
                            cursor: 'pointer',
                            borderRadius: '6px',
                            width: '20px',
                            height: '20px'
                        }}
                    ></span>
                </label>
                <label
                    htmlFor={`${section}-${key}`}
                    style={{
                        marginBottom: '18px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        color: '#333'
                    }}
                >
                    {section === 'reviewLinkClicked' && (
                        <AiFillCheckCircle
                            className="text-success"
                            style={{
                                width: '20px',
                                height: '20px',
                                color: '#0DAC8A',
                                cursor: 'pointer',
                            }}
                        />
                    )}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
            </div>
        ));
    };

    if (!visible) return null; // Hide dropdown if visible state is false

    return (
        <div style={{
            width: '280px',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#fff'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderBottom: '1px solid #E5E7EB'
            }}>
                <h2 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>Filter</h2>
                <button
                    onClick={handleReset}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#0DAC8A',
                        fontSize: '12px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <X size={14} style={{ marginRight: '4px', fontWeight: '900', lineHeight: '20px' }} />
                    Reset
                </button>
            </div>
            <div style={{ padding: '12px 16px' }}>
                {['status', 'satisfied', 'reviewLinkClicked', 'suggestionForImprovement'].map((section, index, array) => (
                    <div key={section} style={{
                        marginBottom: index === array.length - 1 ? '0' : '16px',
                        border: '1px solid #E8E8E9',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <div
                            onClick={() => toggleExpand(section)}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                userSelect: 'none',
                                padding: '12px',
                                backgroundColor: '#F9F9FC',
                                borderBottom: '0.2px solid #E8E8E9'
                            }}
                        >
                            <span style={{ fontSize: '12px', fontWeight: '500', color: '#6B7280' }}>
                                {section === 'suggestionForImprovement' ? 'Suggestion for improvement' :
                                    section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                            </span>
                            {expanded[section] ? <ChevronUp size={16} color="#6B7280" /> : <ChevronDown size={16} color="#6B7280" />}
                        </div>
                        {expanded[section] && (
                            <div style={{ padding: '12px' }}>
                                {renderCheckboxes(section)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderTop: '1px solid #E5E7EB'
            }}>
                <button
                    onClick={() => setVisible(false)} // Hide on Cancel
                    style={{
                        padding: '6px 12px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '6px',
                        background: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#374151'
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={() => setVisible(false)} // Hide on Apply Filter
                    style={{
                        padding: '6px 12px',
                        border: 'none',
                        borderRadius: '6px',
                        background: '#0DAC8A',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500'
                    }}
                >
                    Apply Filter
                </button>
            </div>
        </div>
    );
}
    
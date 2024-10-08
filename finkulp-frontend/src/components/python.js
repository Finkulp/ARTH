import React, { useEffect, useState } from 'react';

function PythonData() {
    const [output, setOutput] = useState('');

    useEffect(() => {
        const runPythonScript = async () => {
            try {
                const response = await fetch('http://localhost:5000/notes/.py');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.text();
                console.log('Script Output:', data);
                setOutput(data);
            } catch (error) {
                console.error('Error fetching script output:', error);
                setOutput('Error fetching script output');
            }
        };

        runPythonScript();
    }, []);

    return (
        <div className="App">
            <h1>Python Script Output</h1>
            <pre>{output}</pre>
        </div>
    );
}

export default PythonData;

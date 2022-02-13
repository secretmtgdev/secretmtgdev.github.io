import React from 'react';
import Latex from 'react-latex';

/**
 * 
 * @param {title} param0, [String] title of problem 
 * @param {hints} param1, [List<String>] hints used
 * @param {companies} param2, [List<String>] companies asking the problem
 * @param {problems} param3, [List<{title: string, link: string}>] related problems
 * @param {timeComplexity} param4, [Optional<string>] run time
 * @param {spaceComplexity} param4, [Optional<string>] auxiliary space used
 * @returns 
 */
const ProblemDescription = ({title, hints, companies, problems, timeComplexity, spaceComplexity}) => {
    return (
        <details>
            <summary data-level='3'>{title}</summary>
            <div data-level='4'>
                <h3>Complexity</h3>
                <div>
                    <p>Time Complexity:  {timeComplexity}</p>
                    <p>Space Complexity: {spaceComplexity}</p>
                </div>
                <h3>Hints</h3>
                    <ul>
                        {hints.map((hint, idx) => (
                            <li key={idx}>{hint}</li>
                        ))}
                    </ul>
                <h3>Companies</h3>
                <div>
                    {companies.map((company, idx) => (
                        <img key={idx} 
                            className='logo'
                            src={require('../company_logos/' + company.toLowerCase() + '.png')}
                            alt={company.charAt(0).toUpperCase() + company.slice(1) + 'logo'}
                        />
                    ))}
                </div>
                <h3>Similar problems</h3>
                <ul>
                    {problems.map((problem, idx) => (
                        <li key={idx}>
                            <a href={problem.link}>{problem.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </details>
    )
}

export default ProblemDescription;
import React from 'react'
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GPIconButton from '../GPIconButton'
import {faFileExport, faFileImport} from '@fortawesome/free-solid-svg-icons'
import './gp-import-export.css'
import {ImportIIcon} from '../GPIcon'

function GPImportExportButton({importClick, exportClick, ...props}) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <GPIconButton
                type="button"
                title={'Import'}
                onClick={importClick}
                classes="btn border-1 rounded-0 i-e-btn"
                icon={faFileImport}
            />
            <GPIconButton
                type="button"
                title={'Export'}
                onClick={exportClick}
                classes="btn border-1 rounded-0 i-e-btn"
                icon={faFileExport}
            />
        </div>
    )
}

export default GPImportExportButton

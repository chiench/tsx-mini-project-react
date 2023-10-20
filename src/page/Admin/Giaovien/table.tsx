
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Button, Tooltip, Space } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const table = () => {
    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
    function handleClikc(p) {
        console.log('p: ', p);

    }
    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { headerName: "ID", field: 'id', pinned: 'left', cellStyle: { 'backgroundColor': '#e2e4e9' } },
        { headerName: "Title", field: 'title', },
        { headerName: "Title", field: 'title', },
        { field: 'completed' },
        {
            headerName: "Action", field: 'title', editable: false,
            cellRenderer: ((params) => {
                return (
                    <div>
                        <Tooltip title="delete">
                            <DeleteOutlined onClick={() => handleClikc(params)} />

                        </Tooltip>
                        <Tooltip title="edit">
                            <EditOutlined onClick={() => handleClikc(params)} />

                        </Tooltip>
                    </div>
                )
            })
        },
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable: true,
        flex: 1,
        editable: true,
        filter: true,
        floatingFilter: true,

    }));

    // Example of consuming Grid Event
    const cellClickedListener = useCallback(event => {
        console.log('cellClicked', event);
    }, []);

    // Example load data from server
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

    // Example using Grid's API
    const buttonListener = useCallback(e => {
        gridRef.current.api.deselectAll();
    }, []);

    return (
        <div>

            {/* Example using Grid's API */}
            {
                rowData && <p>{JSON.stringify(rowData[0])}</p>
            }


            {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
            <div className="ag-theme-alpine" style={{ width: '100%', height: 500 }}>

                <AgGridReact
                    ref={gridRef} // Ref for accessing Grid's API

                    rowData={rowData} // Row Data for Rows

                    columnDefs={columnDefs} // Column Defs for Columns
                    defaultColDef={defaultColDef} // Default Column Properties

                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                    rowSelection='multiple' // Options - allows click selection of rows

                    onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                />
            </div>
        </div>
    );
}

export default table
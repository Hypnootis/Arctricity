import * as React from "react";
import { DataTable } from "react-native-paper";

import { styling } from "./MyTheme";


const optionsPerPage = [2, 3, 4];

export const MyData = () => {
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable style={styling.table}>
            <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>Weight (g)</DataTable.Title>
                <DataTable.Title numeric>Likes cheese</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>Muice</DataTable.Cell>
                <DataTable.Cell numeric>580</DataTable.Cell>
                <DataTable.Cell numeric>Yes</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Mope</DataTable.Cell>
                <DataTable.Cell numeric>550</DataTable.Cell>
                <DataTable.Cell numeric>Yes</DataTable.Cell>
            </DataTable.Row>
             <DataTable.Row>
                <DataTable.Cell>Mesa</DataTable.Cell>
                <DataTable.Cell numeric>490</DataTable.Cell>
                <DataTable.Cell numeric>Yes</DataTable.Cell>
            </DataTable.Row>
        
            <DataTable.Pagination
                page={page}
                numberOfPages={3}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={"Rows per page"}
            />
        </DataTable>
    );

};
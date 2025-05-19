import { type ThemeProps } from "@common/Theme";

export const styles = {
  dataGrid: (theme: ThemeProps) => {
    return {
      sx: {
        border: "none",
        boxShadow: 2,
        "& .MuiDataGrid-columnHeaders": {
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.contactify.backgroundLight,
            borderColor: theme.palette.contactify.contrast,
            width: "100%",
            "& .MuiDataGrid-columnHeaderTitle": {
              color: theme.palette.contactify.contrast,
            },
            "& .MuiDataGrid-columnHeaderTitleContainerContent": {
              width: "100%",
            },
            "& .MuiDataGrid-sortIcon": {
              color: theme.palette.contactify.contrast,
            },
          },
          "& .MuiDataGrid-filler": {
            backgroundColor: theme.palette.contactify.backgroundLight,
          },
        },
        "& .MuiDataGrid-cell": {
          display: "flex",
          alignItems: "center",
        },
        "& .MuiDataGrid-columnSeparator": {
          color: theme.palette.contactify.contrast,
        },
        "& .MuiDataGrid-columnHeader--last": {
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        },
      },
    };
  },
};

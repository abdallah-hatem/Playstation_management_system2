"use client";

import CardComponent from "../../../components/CardComponent";
import MasterTable from "../../../components/MasterTable";
import ADD_DEVICE from "../../../lib/addDevice";
import DELETE_DEVICE from "../../../lib/deleteDevice";

export default async function Devices({ data, options, userId }) {
  function handleAdd(e) {
    let changes = e.data;
    delete changes.__KEY__;

    // console.log({ changes, userId }, "changes");

    ADD_DEVICE({ ...changes, userId });
  }

  function handleDelete(e) {
    const id = e.data.id;
    DELETE_DEVICE(id);
  }

  const columns = [
    {
      field: "name",
      caption: "Name",
    },
    {
      field: "deviceTypeId",
      caption: "Type",
      options: options,
    },
  ];

  return (
    <CardComponent title="Devices" style={{ width: "100%" }}>
      <MasterTable
        allowAdd
        allowDelete
        allowUpdate
        editingMode="popup"
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        onRowInserting={(e) => handleAdd(e)}
        onRowRemoving={(e) => handleDelete(e)}
      />
    </CardComponent>
  );
}

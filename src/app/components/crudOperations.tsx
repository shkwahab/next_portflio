// "use client"
// import React from 'react'
// import { crudClient } from './crudClient'
// const AddTeam = () => {
//
//   const Add = async () => {
//     try {
//       const space = await crudClient.getSpace(`${process.env.CONTENTFUL_SPACE_ID || "q0575plksqtd"}`);
//       const environment = await space.getEnvironment("master");
//       const contentType = "test";
//
//       const entry = await environment.createEntry(contentType, {
//         fields: {
//           title: {
//             'en-US': 'I am Queen'
//           }
//
//         }
//       });
//
//       await entry.publish()
//       console.log(`Team entry created with ID: ${entry.sys.id}`);
//     } catch (error) {
//       console.log("Failed to add the team entry. Error:", error);
//     }
//   };
//   const deleteById = async (id:string) => {
//     try {
//       const space = await crudClient.getSpace(`${process.env.CONTENTFUL_SPACE_ID || "q0575plksqtd"}`);
//       const environment = await space.getEnvironment("master");
//
//       const entry = await environment.getEntry(id);
//
//       if (entry.isPublished()) {
//         await entry.unpublish();
//       }
//
//       await entry.delete();
//       console.log(`Entry with ID ${id} deleted successfully.`);
//     } catch (error) {
//       console.log(`Failed to delete entry with ID ${id}. Error:`, error);
//     }
//   };
//
//   const updateFieldById = async (itemId:string, fieldId:string, updatedValue:string) => {
//     try {
//       const space = await crudClient.getSpace(process.env.CONTENTFUL_SPACE_ID || "q0575plksqtd");
//       const environment = await space.getEnvironment("master");
//
//       const entry = await environment.getEntry(itemId);
//
//       // Update the field with the provided value
//       entry.fields[fieldId]["en-US"] = updatedValue;
//
//       // Set the new version number based on the current version
//
//       // Save and publish the updated entry
//       await entry.update();
//       // Publish the entry
//
//       console.log(`Field ${fieldId} of entry with ID ${itemId} updated successfully.`);
//     } catch (error) {
//       console.log(`Failed to update field ${fieldId} of entry with ID ${itemId}. Error:`, error);
//     }
//   };
//   const publishEntry = async (itemId:string) => {
//     try {
//       const space = await crudClient.getSpace(process.env.CONTENTFUL_SPACE_ID || "q0575plksqtd");
//       const environment = await space.getEnvironment("master");
//
//       const entry = await environment.getEntry(itemId);
//
//       await entry.publish()
//       console.log(`Field published successfully.`);
//     } catch (error) {
//       console.log(`Failed to published`);
//     }
//   };
//
//
//
//
//   return (
//    <>
//    <button onClick={Add}>
//       Add Test
//     </button>
//    <button onClick={()=>{
//     deleteById("5Re1wD4pW1rfG9iCm9QHQl")
//    }}>
//       Delete Test
//     </button>
//    <button onClick={()=>{
//     updateFieldById("Ma5ZasWJVbKgFgXBIPH2o","title","wow updated 8 times")
//     publishEntry("Ma5ZasWJVbKgFgXBIPH2o")
//    }}>
//       Update Test
//     </button>
//    </>
//   )
// }
//
// export default AddTeam
export const GET_RESOURCES_BY_USERS = "GET_RESOURCES_BY_USERS";
export const GET_RESOURCES_BY_USERS_ERR = "GET_RESOURCES_BY_USERS";

export const getResourcesByUsersAction = (resourcesType, resources = {}) => dispatch =>{
    let payloadData = {};
    if(resourcesType === "posts"){
        payloadData.resourcesType = resourcesType;
        payloadData.data = resources;
    }
    if(resourcesType === "todos"){
        payloadData.resourcesType = resourcesType;
        payloadData.data = resources;
    }
    if(resources !== undefined){
        dispatch({
            type: GET_RESOURCES_BY_USERS,
            payload: payloadData
        });
    }else{
        dispatch({
            type: GET_RESOURCES_BY_USERS_ERR,
            payload: "Undefined data found in resources"
        });
    }
}

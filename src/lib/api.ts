import { CodeDetailKey } from "../App";
import client from "./client";

export const adminSetup = (userId: string, userName: string, userPw: string) => client.post("/users/setup", { userId, userName, userPw });

export const signUp = (userId : string , userName : string , userPw : string , job : string) => client.post("/users" , {userId , userName , userPw , job});
export const fetchJobCodeList = () => client.get('/codes/job');

export const fetchCodeGroup = (groupCode: string) => client.get(`/codegroups/${groupCode}`);
export const fetchCodeGroupList = () => client.get("/codegroups");
export const modifyCodeGroup = (groupCode: string, groupName: string) => client.put(`/codegroups/${groupCode}`, { groupName });
export const writeCodeGroup = (groupCode: string, groupName: string) => client.post("/codegroups", { groupCode, groupName });
export const removeCodeGroup = (groupCode: string) => client.delete(`/codegroups/${groupCode}`);

export const fetchCodeDetail = ({ groupCode, codeValue }: CodeDetailKey) => client.get(`/codedetails/${groupCode}/${codeValue}`);
export const fetchCodeDetailList = () => client.get("/codedetails");
export const modifyCodeDetail = (groupCode: string, codeValue: string, codeName: string) => client.put(`/codedetails/${groupCode}/${codeValue}`, { codeValue, codeName });
export const writeCodeDetail = (groupCode: string, codeValue: string, codeName: string) => client.post("/codedetails", { groupCode, codeValue, codeName });
export const removeCodeDetail = (groupCode: string, codeValue: string) => client.delete(`/codedetails/${groupCode}/${codeValue}`);

export const fetchGroupCodeList = () => client.get('/codes/codeGroup');
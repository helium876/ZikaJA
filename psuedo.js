LET Object TData contain (set rash to false, set eyepain to false, set redeye to false, set jpain to false, set vomit to false)

Initialize DataBase_Ref

Function GetSur_SendData(TData)
	let timeStamp = CURRENT_DATE
	let fname be fname of TData
	let age be age of TData
	let address be address of TData
	let aware be aware of TData
	let past be past of TData
	let rash be rash of TData
	let eyepain be eyepain of TData
	let redeye be redeye of TData
	let jpain be jpain of TData
	let vomit be vomit of TData
	push to DataBase_Ref(timeStamp,fname,age,address,aware,past,rash,eyepain,redeye,jpain,vomit)


Function Report_SendData(TData)
	let timeStamp = CURRENT_DATE
	let fname be fname of TData
	let email be email of TData
	let address be address of TData
	let message be message of TData
	push to DataBase_Ref(timeStamp,fname,email,address,message)


Function Send_Notice(TData)
	let timeStamp = CURRENT_DATE
	let area be area of TData
	let time be time of TData
	let message be message of TData
	push to DataBase_Ref(timeStamp,area,time,message)

Function ListData()
	Get DataTable of DataBase_Ref


Function ListNotices()
	Get NotifyTable of DataBase_Ref

Function ListData()
	Get NotifyTable of DataBase_Ref

Function ListVec()
	Get worker of VectorTable of DataBase_Ref

Function ListHome()
	Get home of VectorTable of DataBase_Ref

Function ListReports()
	Get ReportsTable of DataBase_Ref

Function ListReports()
	Get ReportsTable of DataBase_Ref


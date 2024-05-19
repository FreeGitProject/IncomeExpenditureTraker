# IncomeExpenditureTraker
IncomeExpenditureTraker
 Node.js and npm: Ensure you have Node.js and npm installed. You can download them from Node.js official website.

Angular CLI: Install Angular CLI globally using npm.

bash
Copy code
npm install -g @angular/cli


First error come 
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


 ng new UI --skip-tests --skip-git
 
 ng add @angular/material
ng g m material
basic structure
ng g c pageHeader
ng g c sideNav
ng g c pageNotfound
ng g c maintenance
ng g c confirmDialog
ng generate pipe titlecase 


import { CustomTitlecasePipe } from '../titlecase.pipe'; // Adjust the path as needed
import { CustomDatePipe } from '../custom-date.pipe'; // Import the custom pipe
---

API 
 Add-Migration CreateDB
 update-database
 
 PM> update-database
Build started...
Build succeeded.
System.Globalization.CultureNotFoundException: Only the invariant culture is supported in globalization-invariant mode. See https://aka.ms/GlobalizationInvariantMode for more information. (Parameter 'name')
en-us is an invalid culture identifier.
   at System.Globalization.CultureInfo.GetCultureInfo(String name)
   at Microsoft.Data.SqlClient.SqlConnection.TryOpen(TaskCompletionSource`1 retry, SqlConnectionOverrides overrides)
   at Microsoft.Data.SqlClient.SqlConnection.Open(SqlConnectionOverrides overrides)
   at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerConnection.OpenDbConnection(Boolean errorsExpected)
   at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternal(Boolean errorsExpected)
   at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.Open(Boolean errorsExpected)
   at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerDatabaseCreator.<>c__DisplayClass18_0.<Exists>b__0(DateTime giveUp)
   at Microsoft.EntityFrameworkCore.ExecutionStrategyExtensions.<>c__DisplayClass12_0`2.<Execute>b__0(DbContext _, TState s)
   at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.Execute[TState,TResult](TState state, Func`3 operation, Func`3 verifySucceeded)
   at Microsoft.EntityFrameworkCore.ExecutionStrategyExtensions.Execute[TState,TResult](IExecutionStrategy strategy, TState state, Func`2 operation, Func`2 verifySucceeded)
   at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerDatabaseCreator.Exists(Boolean retryOnNotExists)
   at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerDatabaseCreator.Exists()
   at Microsoft.EntityFrameworkCore.Migrations.HistoryRepository.Exists()
   at Microsoft.EntityFrameworkCore.Migrations.Internal.Migrator.Migrate(String targetMigration)
   at Microsoft.EntityFrameworkCore.Design.Internal.MigrationsOperations.UpdateDatabase(String targetMigration, String connectionString, String contextType)
   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.UpdateDatabaseImpl(String targetMigration, String connectionString, String contextType)
   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.UpdateDatabase.<>c__DisplayClass0_0.<.ctor>b__0()
   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.OperationBase.Execute(Action action)
Only the invariant culture is supported in globalization-invariant mode. See https://aka.ms/GlobalizationInvariantMode for more information. (Parameter 'name')
en-us is an invalid culture identifier.
PM> 

Done Go to csproj file and set false 
that fixed 




--frontend
ng g s api

ng g c viewData
ng g p number
ng g p monthName

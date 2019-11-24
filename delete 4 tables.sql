
delete from [dbo].[ValueToType]
delete from [dbo].[TypeDetails]
delete from [dbo].[Type]
delete from [dbo].[Voter]

select * from [dbo].ValueToType
select * from [dbo].Voter
select * from [dbo].[Type]
select * from [dbo].TypeDetails


exec [dbo].[IsExistType] 'מין' ;
exec [dbo].[IsExistVoter] 1463,1
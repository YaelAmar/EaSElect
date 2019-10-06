--[dbo].[Company]
ALTER TABLE [dbo].[Election]
ADD CONSTRAINT FK_CompanyId
FOREIGN KEY (CompanyId) REFERENCES [dbo].[Company]([CompanyId]);

--[dbo].[ElectionResult]
ALTER TABLE [dbo].[ElectionResult]
ADD CONSTRAINT FK_ElectionOptionId
FOREIGN KEY ([ElectionOptionId]) REFERENCES [dbo].[ElectionOption]([ElectionOptionId]);

--[dbo].[ValueToType]

ALTER TABLE [dbo].[ValueToType]
ADD CONSTRAINT FK_VoterId
FOREIGN KEY ([VoterId]) REFERENCES [dbo].[ElectionResult]([VoterId]);

ALTER TABLE [dbo].[ValueToType]
ADD CONSTRAINT FK_TypeDetailsId
FOREIGN KEY ([TypeDetailsId]) REFERENCES [dbo].[TypeDetails]([TypeDetailsId])

--[dbo].[TypeDetails]
ALTER TABLE [dbo].[TypeDetails]
ADD CONSTRAINT FK_TypeId
FOREIGN KEY ([TypeId]) REFERENCES [dbo].[Type]([TypeId])
--[dbo].[ElectionOption]
ALTER TABLE [dbo].[ElectionOption]
ADD CONSTRAINT FK_ElectionId
FOREIGN KEY ([ElectionId]) REFERENCES [dbo].[Election]([ElectionId])

--[dbo].[Voter]
ALTER TABLE [dbo].[Voter]
ADD CONSTRAINT FK_ElectionIdVoter
FOREIGN KEY ([ElectionId]) REFERENCES [dbo].[Election]([ElectionId])


CREATE TABLE [dbo].[Company](
	[CompanyId] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](55) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nchar](10) NOT NULL,
	[DeleteRow] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[CompanyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


CREATE TABLE [dbo].[Election](
	[ElectionId] [bigint] IDENTITY(1,1) NOT NULL,
	[ElectionName] [nvarchar](50) NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[CompanyId] [bigint] NOT NULL,
	[DeleteRow] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ElectionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Election]  WITH CHECK ADD  CONSTRAINT [FK_CompanyId] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([CompanyId])
GO

ALTER TABLE [dbo].[Election] CHECK CONSTRAINT [FK_CompanyId]
GO
CREATE TABLE [dbo].[ElectionOption](
	[ElectionOptionId] [bigint] IDENTITY(1,1) NOT NULL,
	[ElectionOptionName] [nvarchar](50) NOT NULL,
	[ElectionId] [bigint] NOT NULL,
	[DeleteRow] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ElectionOptionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ElectionOption]  WITH CHECK ADD  CONSTRAINT [FK_ElectionId] FOREIGN KEY([ElectionId])
REFERENCES [dbo].[Election] ([ElectionId])
GO

ALTER TABLE [dbo].[ElectionOption] CHECK CONSTRAINT [FK_ElectionId]
GO


CREATE TABLE [dbo].[Type](
	[TypeId] [bigint] IDENTITY(1,1) NOT NULL,
	[TypeName] [nvarchar](50) NOT NULL,
	[DeleteRow] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[TypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO




CREATE TABLE [dbo].[TypeDetails](
	[TypeDetailsId] [bigint] IDENTITY(1,1) NOT NULL,
	[TypeId] [bigint] NOT NULL,
	[TypeDetailsName] [nvarchar](50) NOT NULL,
	[DeleteRow] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[TypeDetailsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[TypeDetails]  WITH CHECK ADD  CONSTRAINT [FK_TypeId] FOREIGN KEY([TypeId])
REFERENCES [dbo].[Type] ([TypeId])
GO

ALTER TABLE [dbo].[TypeDetails] CHECK CONSTRAINT [FK_TypeId]
GO

CREATE TABLE [dbo].[Voter](
	[VoterId] [bigint] NOT NULL,
	[ElectionId] [bigint] NOT NULL,
	[Adress] [nvarchar](50) NOT NULL,
	[DeleteRow] [bit] NOT NULL,
 CONSTRAINT [PK_Voter] PRIMARY KEY CLUSTERED 
(
	[VoterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Voter]  WITH CHECK ADD  CONSTRAINT [FK_ElectionIdVoter] FOREIGN KEY([ElectionId])
REFERENCES [dbo].[Election] ([ElectionId])
GO

ALTER TABLE [dbo].[Voter] CHECK CONSTRAINT [FK_ElectionIdVoter]
GO




CREATE TABLE [dbo].[ElectionResult](
	[ElectionResultId] [bigint] NOT NULL,
	[VoterId] [bigint] NOT NULL,
	[ElectionOptionId] [bigint] NOT NULL,
	[DeleteRow] [bit] NOT NULL,
 CONSTRAINT [PK_ElectionResult] PRIMARY KEY CLUSTERED 
(
	[ElectionResultId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ElectionResult]  WITH CHECK ADD  CONSTRAINT [FK_VoterIdResult] FOREIGN KEY([VoterId])
REFERENCES [dbo].[Voter] ([VoterId])
GO

ALTER TABLE [dbo].[ElectionResult] CHECK CONSTRAINT [FK_VoterIdResult]
GO